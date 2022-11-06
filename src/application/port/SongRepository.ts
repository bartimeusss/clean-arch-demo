import { Song } from 'application/model/Song';

export interface SongRepository {
    getSongs(songsIds: string[]): Promise<Song[]>;
}
