import { Song } from 'application/model/Song';
import { restGet } from 'repository/restTypes';
import { PlayList } from 'application/model/PlayList';
import { Artist } from 'application/model/Artist';

export const getArtists = (get: restGet) => (ids: string[]): Promise<Artist[]> =>
    get('/artist', { ids });

export const getAllPlayLists = (get: restGet) => (): Promise<PlayList[]> =>
    get('/playlist');

export const getPlayList = (get: restGet) => (id: string): Promise<PlayList> =>
    get(`/playlist/${id}`);

export const getSongs = (get: restGet) => (songsIds: string[]): Promise<Song[]> =>
    get('/song', { ids: songsIds });
