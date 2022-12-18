import { PlayListContext } from 'ui/PlayListContext';
import { mockRestGet } from 'infrastructure/MockRestClient';
import { logError } from 'infrastructure/ConsoleLogger';
import { showAllPlayListsUseCase } from 'application/use-case/showAllPlayListsUseCase';
import * as playListsState from 'ui/state/playListsState';
import * as playListDetailsState from 'ui/state/playListDetailsState';
import * as repository from 'repository/repository';
import { showError } from 'ui/notification/notification';
import { openPlayListUseCase } from 'application/use-case/openPlayListUseCase';
import { closePlayListUseCase } from 'application/use-case/closePlayListUseCase';

class PlayListsFactory {
    private context: PlayListContext | null = null;

    get(): PlayListContext {
        if (this.context !== null) {
            return this.context;
        }

        this.context = {
            showPlayListsUseCase: showAllPlayListsUseCase(
                playListsState.showLoader,
                playListsState.hideLoader,
                repository.getAllPlayLists(mockRestGet),
                playListsState.showPlayListsAndHideLoader,
                showError,
                logError,
            ),
            openPlayListUseCase: openPlayListUseCase(
                playListDetailsState.openModalWithLoader,
                repository.getPlayList(mockRestGet),
                repository.getSongs(mockRestGet),
                repository.getArtists(mockRestGet),
                playListDetailsState.showPlayListAndHideLoader,
                playListDetailsState.closeModalAndHideLoader,
                showError,
                logError,
            ),
            closePlayListUseCase: closePlayListUseCase(playListDetailsState.closeModal),
        };

        return this.context;
    }
}

export const playListsFactory = new PlayListsFactory();
