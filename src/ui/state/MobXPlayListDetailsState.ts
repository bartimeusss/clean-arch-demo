import { makeAutoObservable } from 'mobx';

import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';

export class MobXPlayListDetailsState {
    constructor() {
        makeAutoObservable(this);
    }

    isLoading = false;
    isModalOpen = false;
    playList: PlayListDetailsPresentation | null = null;
}