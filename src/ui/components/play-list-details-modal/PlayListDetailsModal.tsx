import React from 'react';
import ReactModal from 'react-modal';

import { state } from 'ui/state/playListDetailsState';

type PlayListDetailsModalProps = {
    closePlayListUseCase: () => Promise<void>,
};

export const PlayListDetailsModal: React.FC<PlayListDetailsModalProps> = ({
    closePlayListUseCase,
}) => (
    <ReactModal
        isOpen={state.isModalOpen}
        ariaHideApp={false}
        onRequestClose={closePlayListUseCase}
    >
        {
            state.isLoading && (
                <div>Loading...</div>
            )
        }
        {
            state.playList?.songs.map(it => (
                <div key={it.id}>
                    <div>{it.name} - {it.artist.name}</div>
                    <div>{it.duration}</div>
                </div>
            ))
        }
    </ReactModal>
);
