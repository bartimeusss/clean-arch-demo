import React from 'react';
import ReactModal from 'react-modal';

import { MobXPlayListDetailsState } from 'ui/state/MobXPlayListDetailsState';
import { ClosePlayListUseCase } from 'application/use-case/ClosePlayListUseCase';

type PlayListDetailsModalProps = {
    playListDetailsState: MobXPlayListDetailsState,
    closePlayListUseCase: ClosePlayListUseCase,
};

export const PlayListDetailsModal: React.FC<PlayListDetailsModalProps> = ({
    playListDetailsState,
    closePlayListUseCase,
}) => (
    <ReactModal
        isOpen={playListDetailsState.isModalOpen}
        ariaHideApp={false}
        onRequestClose={closePlayListUseCase.closePlayList}
    >
        {
            playListDetailsState.isLoading && (
                <div>Loading...</div>
            )
        }
        {
            playListDetailsState.playList?.songs.map(it => (
                <div key={it.id}>
                    <div>{it.name} - {it.artist.name}</div>
                    <div>{it.duration}</div>
                </div>
            ))
        }
    </ReactModal>
);
