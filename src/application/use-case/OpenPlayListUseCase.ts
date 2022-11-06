import { PlayListRepository } from 'application/port/PlayListRepository';
import { SongRepository } from 'application/port/SongRepository';
import { ArtistRepository } from 'application/port/ArtistRepository';
import { NotificationView } from 'application/port/NotificationView';
import { Logger } from 'application/port/Logger';
import { PlayList } from 'application/model/PlayList';
import { Song } from 'application/model/Song';
import { Artist } from 'application/model/Artist';
import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';
import { PlayListDetailsView } from 'application/port/PlayListDetailsView';

const unknownArtist: Artist = {
    id: '-',
    name: 'Unknown',
}

export class OpenPlayListUseCase {
    constructor(
        private playListView: PlayListDetailsView,
        private artistRepository: ArtistRepository,
        private songRepository: SongRepository,
        private playListRepository: PlayListRepository,
        private notifierView: NotificationView,
        private logger: Logger,
    ) {}

    async openPlayList(id: string): Promise<void> {
        try {
            this.playListView.openModalWithLoader();

            const playList = await this.playListRepository.getPlayList(id);
            const songs = await this.songRepository.getSongs(playList.songIds);
            const artistIds = songs.map(it => it.artistId);
            const artists = await this.artistRepository.getArtists(artistIds);

            const presentation = this.mapPresentation(playList, songs, artists);

            this.playListView.showPlayListAndHideLoader(presentation);
        } catch (error) {
            this.logger.logError(error);
            this.notifierView.showError('Cannot load playlist details');
            this.playListView.closeModalAndHideLoader();
        }
    }

    private mapPresentation(playList: PlayList, songs: Song[], artists: Artist[]): PlayListDetailsPresentation {
        return {
            id: playList.id,
            songs: songs.map(song => ({
                id: song.id,
                name: song.name,
                duration: this.formatDuration(song.durationInSeconds),
                artist: artists.find(it => it.id === song.artistId) ?? unknownArtist,
            })),
        };
    }

    private formatDuration(durationInSeconds: number): string {
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = durationInSeconds - minutes * 60;
        const formattedSeconds = String(seconds).padStart(2, '0')

        return `${minutes}:${formattedSeconds}`;
    }
}