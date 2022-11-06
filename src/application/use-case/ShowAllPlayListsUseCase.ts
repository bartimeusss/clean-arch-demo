import { omit } from 'lodash';

import { PlayListRepository } from 'application/port/PlayListRepository';
import { PlayListsView } from 'application/port/PlayListsView';
import { NotificationView } from 'application/port/NotificationView';
import { Logger } from 'application/port/Logger';

export class ShowAllPlayListsUseCase {
    constructor(
        private playListRepository: PlayListRepository,
        private playListsView: PlayListsView,
        private notifierView: NotificationView,
        private logger: Logger,
    ) {}

    async showAllPlayLists(): Promise<void> {
        try {
            this.playListsView.showLoader();

            const playLists = await this.playListRepository.getAllPlayLists();
            const presentations = playLists.map(it => omit(it, 'songIds'));

            this.playListsView.showPlayListsAndHideLoader(presentations);
        } catch (error) {
            this.notifierView.showError('Cannot upload playlists');
            this.logger.logError(error);
            this.playListsView.hideLoader();
        }
    }
}