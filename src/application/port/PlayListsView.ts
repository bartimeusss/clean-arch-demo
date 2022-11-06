import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

export interface PlayListsView {
    showLoader(): void;
    hideLoader(): void;
    showPlayListsAndHideLoader(playLists: PlayListPreviewPresentation[]): void
}