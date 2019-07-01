import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './components/profile'
import { Provider } from 'react-redux'
import { store } from './store';

const slider = require('./js/slider');

const app = document.getElementById('root');
slider();
ReactDOM.render(
    <Provider store={store}>
        <Profile/>
    </Provider>, app);