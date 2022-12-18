import { connect } from 'ui/connector';
import { PlayLists } from './PlayLists';

export const PlayListsConnected = connect(PlayLists, 'showPlayListsUseCase');
