import { ArtistRepository } from 'application/port/ArtistRepository';
import { Artist } from 'application/model/Artist';
import { RestClient } from 'repository/RestClient';
import { PlayListRepository } from 'application/port/PlayListRepository';
import { SongRepository } from 'application/port/SongRepository';
import { PlayList } from 'application/model/PlayList';
import { Song } from 'application/model/Song';

export class RestRepository implements ArtistRepository, PlayListRepository, SongRepository { //implementation could be split
    constructor(
        private restClient: RestClient,
    ) {}

    getArtists(ids: string[]): Promise<Artist[]> {
        return this.restClient.get('/artist', { ids });
    }

    getAllPlayLists(): Promise<PlayList[]> {
        return this.restClient.get('/playlist');
    }

    getPlayList(id: string): Promise<PlayList> {
        return this.restClient.get(`/playlist/${id}`);
    }

    getSongs(songsIds: string[]): Promise<Song[]> {
        return this.restClient.get('/song', { ids: songsIds });
    }
}