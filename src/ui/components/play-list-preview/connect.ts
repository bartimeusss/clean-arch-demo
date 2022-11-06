import { connect } from 'ui/connector';
import { PlayListPreview } from './PlayListPreview';

export const PlayListPreviewConnected = connect(PlayListPreview, 'openPlayListUseCase');
