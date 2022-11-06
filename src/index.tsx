import React from 'react';
import ReactDOM from 'react-dom/client';

import { PlayListsWrapper } from 'config';
import { configure } from 'mobx';

configure({
    enforceActions: 'always',
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<PlayListsWrapper />);
