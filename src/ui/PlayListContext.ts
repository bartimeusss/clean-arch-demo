import { MobXPlayListsState } from 'ui/state/MobXPlayListsState';
import { MobXPlayListDetailsState } from 'ui/state/MobXPlayListDetailsState';
import { ShowAllPlayListsUseCase } from 'application/use-case/ShowAllPlayListsUseCase';
import { OpenPlayListUseCase } from 'application/use-case/OpenPlayListUseCase';
import { ClosePlayListUseCase } from 'application/use-case/ClosePlayListUseCase';

export type PlayListContext = {
    playListsState: MobXPlayListsState;
    playListDetailsState: MobXPlayListDetailsState;
    showPlayListsUseCase: ShowAllPlayListsUseCase;
    openPlayListUseCase: OpenPlayListUseCase;
    closePlayListUseCase: ClosePlayListUseCase;
};
