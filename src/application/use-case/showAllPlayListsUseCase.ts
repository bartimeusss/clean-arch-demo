import { omit } from 'lodash';

import { PlayList } from 'application/model/PlayList';
import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

export const showAllPlayListsUseCase = (
    showLoader: () => void,
    hideLoader: () => void,
    getAllPlayLists: () => Promise<PlayList[]>,
    showPlayListsAndHideLoader: (playLists: PlayListPreviewPresentation[]) => void,
    showNotificationError: (message: string) => void,
    logError: (error: unknown) => void,
) => async (): Promise<void> => {
    try {
        showLoader();

        const playLists = await getAllPlayLists();
        const presentations = playLists.map(it => omit(it, 'songIds'));

        showPlayListsAndHideLoader(presentations);
    } catch (error) {
        showNotificationError('Cannot upload playlists');
        logError(error);
        hideLoader();
    }
}
