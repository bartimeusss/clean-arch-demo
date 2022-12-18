import { action, observable } from 'mobx';

import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';

export const state = observable.object({
    isLoading: false,
    isModalOpen: false,
    playList: null as PlayListDetailsPresentation | null,
});

export const openModalWithLoader = action(() => {
    state.isModalOpen = true;
    state.isLoading = true;
});

export const closeModalAndHideLoader = action(() => {
    closeModal();
    state.isLoading = false;
});

export const showPlayListAndHideLoader = action((presentation: PlayListDetailsPresentation) => {
    state.playList = presentation;
    state.isLoading = false;
});

export const closeModal = action(() => {
    state.isModalOpen = false;
    state.playList = null;
});
