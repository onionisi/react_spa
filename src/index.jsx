import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from 'react';
import { App } from './App';

let store = createStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
