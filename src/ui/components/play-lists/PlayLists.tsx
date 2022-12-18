import React, { useEffect } from 'react';

import { PlayListPreview } from 'ui/components/play-list-preview';
import { PlayListDetailsModal } from 'ui/components/play-list-details-modal';
import { state } from 'ui/state/playListsState';

type PlayListsProps = {
    showPlayListsUseCase: () => Promise<void>,
};

export const PlayLists: React.FC<PlayListsProps> = ({
    showPlayListsUseCase,
}) => {
    useEffect(() => { showPlayListsUseCase(); }, [showPlayListsUseCase]);

    if (state.isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    return (
        <div>
            {
                state.playLists.map(it => (
                    <PlayListPreview key={it.id} playListPreview={it} />
                ))
            }
            <PlayListDetailsModal />
        </div>
    );
}