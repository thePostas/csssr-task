import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './components/profile'
import { Provider } from 'react-redux'
import { store } from './store';

const app = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Profile/>
    </Provider>, app);