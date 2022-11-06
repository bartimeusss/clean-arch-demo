import { makeAutoObservable } from 'mobx';

import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

export class MobXPlayListsState {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    playLists: PlayListPreviewPresentation[] = [];
}