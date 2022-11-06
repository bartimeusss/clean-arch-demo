import { Artist } from './Artist';

export type SongPresentation = {
    id: string;
    name: string;
    duration: string;
    artist: Artist;
};
