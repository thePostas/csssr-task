import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from './components/profile'
const slider = require('./js/slider');

const app = document.getElementById('root');
slider();
ReactDOM.render(<Profile/>, app);