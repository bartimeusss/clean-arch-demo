import { showAllPlayListsUseCase } from 'application/use-case/showAllPlayListsUseCase';
import { openPlayListUseCase } from 'application/use-case/openPlayListUseCase';
import { closePlayListUseCase } from 'application/use-case/closePlayListUseCase';

export type PlayListContext = {
    showPlayListsUseCase: ReturnType<typeof showAllPlayListsUseCase>;
    openPlayListUseCase: ReturnType<typeof openPlayListUseCase>;
    closePlayListUseCase: ReturnType<typeof closePlayListUseCase>;
};
