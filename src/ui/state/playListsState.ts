import { action, observable } from 'mobx';

import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

export const state = observable.object({
    isLoading: false,
    playLists: [] as PlayListPreviewPresentation[],
});

export const hideLoader = action(() => {
    state.isLoading = false;
});

export const showLoader = action(() => {
    state.isLoading = true;
});

export const showPlayListsAndHideLoader = action((playLists: PlayListPreviewPresentation[]) => {
    state.playLists = playLists;
    state.isLoading = false;
});
