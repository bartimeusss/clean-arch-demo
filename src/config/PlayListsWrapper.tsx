import React from 'react';

import { Provider } from 'ui/connector';
import { playListsFactory } from 'config/PlayListsFactory';
import { PlayLists } from 'ui/components/play-lists';

export const PlayListsWrapper: React.FC = () => {
    return (
        <Provider appContext={playListsFactory.get()}>
            <PlayLists />
        </Provider>
    );
};
