import { PlayList } from 'application/model/PlayList';
import { Song } from 'application/model/Song';
import { Artist } from 'application/model/Artist';
import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';

const unknownArtist: Artist = {
    id: '-',
    name: 'Unknown',
}

export const openPlayListUseCase = (
    openModalWithLoader: () => void,
    getPlayList: (id: string) => Promise<PlayList>,
    getSongs: (songIds: string[]) => Promise<Song[]>,
    getArtists: (artistIds: string[]) => Promise<Artist[]>,
    showPlayListAndHideLoader: (presentation: PlayListDetailsPresentation) => void,
    closeModalAndHideLoader: () => void,
    showNotificationError: (message: string) => void,
    logError: (error: unknown) => void,
) => async (id: string): Promise<void> => {
    try {
        openModalWithLoader();

        const playList = await getPlayList(id);
        const songs = await getSongs(playList.songIds);
        const artistIds = songs.map(it => it.artistId);
        const artists = await getArtists(artistIds);

        const presentation = mapPresentation(playList, songs, artists);

        showPlayListAndHideLoader(presentation);
    } catch (error) {
        logError(error);
        showNotificationError('Cannot load playlist details');
        closeModalAndHideLoader();
    }
}

const mapPresentation = (playList: PlayList, songs: Song[], artists: Artist[]): PlayListDetailsPresentation => ({
    id: playList.id,
    songs: songs.map(song => ({
        id: song.id,
        name: song.name,
        duration: formatDuration(song.durationInSeconds),
        artist: artists.find(it => it.id === song.artistId) ?? unknownArtist,
    })),
});

const formatDuration = (durationInSeconds: number): string => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds - minutes * 60;
    const formattedSeconds = String(seconds).padStart(2, '0')

    return `${minutes}:${formattedSeconds}`;
};
