import { PlayListContext } from 'ui/PlayListContext';
import { MobXPlayListsState } from 'ui/state/MobXPlayListsState';
import { MobXPlayListDetailsState } from 'ui/state/MobXPlayListDetailsState';
import { MobXPlayListsView } from 'ui/view/MobXPlayListsView';
import { MobXPlayListDetailsView } from 'ui/view/MobXPlayListDetailsView';
import { MockRestClient } from 'infrastructure/MockRestClient';
import { RestRepository } from 'repository/RestRepository';
import { ShowAllPlayListsUseCase } from 'application/use-case/ShowAllPlayListsUseCase';
import { AlertNotificationView } from 'ui/view/AlertNotificationView';
import { ConsoleLogger } from 'infrastructure/ConsoleLogger';
import { OpenPlayListUseCase } from 'application/use-case/OpenPlayListUseCase';
import { ClosePlayListUseCase } from 'application/use-case/ClosePlayListUseCase';

class PlayListsFactory {
    private context: PlayListContext | null = null;

    get(): PlayListContext {
        if (this.context !== null) {
            return this.context;
        }

        const playListsState = new MobXPlayListsState();
        const playListDetailsState = new MobXPlayListDetailsState();

        const playListsView = new MobXPlayListsView(playListsState);
        const playListDetailsView = new MobXPlayListDetailsView(playListDetailsState);
        const notificationView = new AlertNotificationView();

        const logger = new ConsoleLogger();

        const restClient = new MockRestClient();
        const restRepository = new RestRepository(restClient);

        const showPlayListsUseCase = new ShowAllPlayListsUseCase(
            restRepository,
            playListsView,
            notificationView,
            logger,
        );

        const openPlayListUseCase = new OpenPlayListUseCase(
            playListDetailsView,
            restRepository,
            restRepository,
            restRepository,
            notificationView,
            logger,
        );

        const closePlayListUseCase = new ClosePlayListUseCase(playListDetailsView);

        this.context = {
            playListsState,
            playListDetailsState,
            showPlayListsUseCase,
            openPlayListUseCase,
            closePlayListUseCase,
        };

        return this.context;
    }
}

export const playListsFactory = new PlayListsFactory();
