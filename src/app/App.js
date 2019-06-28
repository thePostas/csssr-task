import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
const slider = require('./js/slider');

const app = document.getElementById('root');
slider();
ReactDOM.render( <div className={'wrapper'}>Заглушка</div>, app);