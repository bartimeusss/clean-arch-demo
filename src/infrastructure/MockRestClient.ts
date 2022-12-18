import { restGet } from 'repository/restTypes';
import { PlayList } from 'application/model/PlayList';
import { Song } from 'application/model/Song';
import { Artist } from 'application/model/Artist';

const playLists: PlayList[] = [
    {
        id: 'pl-1',
        name: 'Cool playlist',
        songIds: ['sg-1', 'sg-2', 'sg-3'],
    },
    {
        id: 'pl-2',
        name: 'The worst playlist',
        songIds: ['sg-4', 'sg-5'],
    },
];

const songs: Song[] = [
    {
        id: 'sg-1',
        name: 'Chop Suey!',
        durationInSeconds: 210,
        artistId: 'soad',
    },
    {
        id: 'sg-2',
        name: 'Deutschland',
        durationInSeconds: 322,
        artistId: 'rammstein',
    },
    {
        id: 'sg-3',
        name: 'Feuer und Wasser',
        durationInSeconds: 318,
        artistId: 'rammstein',
    },
    {
        id: 'sg-4',
        name: 'Bla bla',
        durationInSeconds: 120,
        artistId: 'morgenstern',
    },
    {
        id: 'sg-5',
        name: 'Bla bla bla',
        durationInSeconds: 123,
        artistId: 'morgenstern',
    },
];

const artists: Artist[] = [
    {
        id: 'soad',
        name: 'System of a Down',
    },
    {
        id: 'rammstein',
        name: 'Rammstein',
    },
    {
        id: 'morgenstern',
        name: 'Morgenstern',
    },
];

export const mockRestGet: restGet = async <Response>(url: string, queryParams?: Record<string, any>): Promise<Response> => {
    await delay();

    if (shouldThrowError()) {
        throw Error('Some API error');
    }

    switch (url) {
        case '/playlist':
            return playLists as Response;

        case '/playlist/pl-1':
            return playLists[0] as Response;

        case '/playlist/pl-2':
            return playLists[1] as Response;

        case '/song':
            return songs.filter(it => queryParams!['ids'].includes(it.id)) as Response;

        case '/artist':
            return artists as Response;

        default:
            throw Error('Not found');
    }
}

const delay = (): Promise<void> => new Promise(resolve => {
    setTimeout(() => resolve(), 200);
});

const shouldThrowError = () => Math.random() < 0.1;
