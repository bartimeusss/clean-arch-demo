import React, { useCallback } from 'react';

import { PlayListPreviewPresentation } from 'application/model/PlayListPreviewPresentation';
import { OpenPlayListUseCase } from 'application/use-case/OpenPlayListUseCase';

type PlayListPreviewProps = {
    playListPreview: PlayListPreviewPresentation,
    openPlayListUseCase: OpenPlayListUseCase,
};

export const PlayListPreview: React.FC<PlayListPreviewProps> = ({
    playListPreview,
    openPlayListUseCase,
}) => {
    const openPlayList = useCallback(
        () => openPlayListUseCase.openPlayList(playListPreview.id),
        [openPlayListUseCase, playListPreview.id],
    );

    return (
        <div>
            <div>{playListPreview.name}</div>
            <button onClick={openPlayList}>Open</button>
        </div>
    )
}