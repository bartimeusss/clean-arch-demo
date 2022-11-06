import { Artist } from 'application/model/Artist';

export interface ArtistRepository {
    getArtists(ids: string[]): Promise<Artist[]>;
}
