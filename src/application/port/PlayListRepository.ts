import { PlayList } from 'application/model/PlayList';

export interface PlayListRepository {
    getAllPlayLists(): Promise<PlayList[]>;
    getPlayList(id: string): Promise<PlayList>;
}