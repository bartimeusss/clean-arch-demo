import { makeAutoObservable } from 'mobx';

import { PlayListsView } from 'application/port/PlayListsView';
import { MobXPlayListsState } from 'ui/state/MobXPlayListsState';
import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

export class MobXPlayListsView implements PlayListsView {
    constructor(
        private state: MobXPlayListsState,
    ) {
        makeAutoObservable(this);
    }

    hideLoader(): void {
        this.state.isLoading = false;
    }

    showLoader(): void {
        this.state.isLoading = true;
    }

    showPlayListsAndHideLoader(playLists: PlayListPreviewPresentation[]): void {
        this.state.playLists = playLists;
        this.state.isLoading = false;
    }
}
