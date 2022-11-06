import { PlayListDetailsView } from 'application/port/PlayListDetailsView';

export class ClosePlayListUseCase {
    constructor(
        private playListView: PlayListDetailsView,
    ) {}

    async closePlayList(): Promise<void> {
        this.playListView.closeModal();
    }
}