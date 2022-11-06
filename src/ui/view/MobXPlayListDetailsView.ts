import { makeAutoObservable } from 'mobx';

import { PlayListDetailsView } from 'application/port/PlayListDetailsView';
import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';
import { MobXPlayListDetailsState } from 'ui/state/MobXPlayListDetailsState';

export class MobXPlayListDetailsView implements PlayListDetailsView {
    constructor(
        private state: MobXPlayListDetailsState,
    ) {
        makeAutoObservable(this);
    }

    openModalWithLoader(): void {
        this.state.isModalOpen = true;
        this.state.isLoading = true;
    }

    closeModalAndHideLoader(): void {
        this.closeModal();
        this.state.isLoading = false;
    }

    showPlayListAndHideLoader(presentation: PlayListDetailsPresentation): void {
        this.state.playList = presentation;
        this.state.isLoading = false;
    }

    closeModal(): void {
        this.state.isModalOpen = false;
        this.state.playList = null;
    }
}