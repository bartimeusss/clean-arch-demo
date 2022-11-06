import { PlayListDetailsPresentation } from 'application/model/PlayListDetailsPresentation';

export interface PlayListDetailsView {
    openModalWithLoader(): void;
    closeModalAndHideLoader(): void;
    showPlayListAndHideLoader(presentation: PlayListDetailsPresentation): void;
    closeModal(): void;
}