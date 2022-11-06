import { Connect, ReactContextConnector } from 'ui/ReactContextConnector';
import { PlayListContext } from 'ui/PlayListContext';

const connector = new ReactContextConnector<PlayListContext>();
export const Provider = connector.Provider;
export const connect: Connect<PlayListContext> = connector.connect;