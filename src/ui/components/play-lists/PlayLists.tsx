import React, { useEffect } from 'react';

import { MobXPlayListsState } from 'ui/state/MobXPlayListsState';
import { ShowAllPlayListsUseCase } from 'application/use-case/ShowAllPlayListsUseCase';
import { PlayListPreview } from 'ui/components/play-list-preview';
import { PlayListDetailsModal } from 'ui/components/play-list-details-modal';

type PlayListsProps = {
    playListsState: MobXPlayListsState,
    showPlayListsUseCase: ShowAllPlayListsUseCase,
};

export const PlayLists: React.FC<PlayListsProps> = ({
    playListsState,
    showPlayListsUseCase,
}) => {
    useEffect(() => {
        showPlayListsUseCase.showAllPlayLists()
    }, [showPlayListsUseCase]);

    if (playListsState.isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {
                playListsState.playLists.map(it => (
                    <PlayListPreview key={it.id} playListPreview={it} />
                ))
            }
            <PlayListDetailsModal />
        </div>
    );
}