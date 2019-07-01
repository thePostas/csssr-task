import { taskReducer } from '../store/reducers';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from './logger';

const initialState = {
    fields: [
    // {title: 'Полное ФИО', value: 'Поставцев Александр Александрович'},
    // {title: 'Год рождения', value: '1988'},
    // {title: 'Место жительства', value: 'г. Москва, ул. Широкая д.10 к.2'},
    // {title: 'Скайп', value: 'thepostas'},
    // {title: 'Почта', value: 'postas87@mail.ru'},
]
};

export const store = createStore(taskReducer, initialState, applyMiddleware(logger));