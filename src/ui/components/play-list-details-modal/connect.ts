import { connect } from 'ui/connector';
import { PlayListDetailsModal } from './PlayListDetailsModal';

export const PlayListDetailsModalConnected = connect(
    PlayListDetailsModal,
    'playListDetailsState',
    'closePlayListUseCase',
);
