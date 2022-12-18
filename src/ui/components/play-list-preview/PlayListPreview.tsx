import React, { useCallback } from 'react';

import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';

type PlayListPreviewProps = {
    playListPreview: PlayListPreviewPresentation,
    openPlayListUseCase: (id: string) => Promise<void>,
};

export const PlayListPreview: React.FC<PlayListPreviewProps> = ({
    playListPreview,
    openPlayListUseCase,
}) => {
    const openPlayList = useCallback(
        () => openPlayListUseCase(playListPreview.id),
        [openPlayListUseCase, playListPreview.id],
    );

    return (
        <div>
            <div>{playListPreview.name}</div>
            <button onClick={openPlayList}>Open</button>
        </div>
    )
}