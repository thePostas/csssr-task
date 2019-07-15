import { taskReducer } from '../store/reducers';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { logger } from './logger';

const initialState = {
    fields: [
            {title: 'Полное ФИО', value: 'Поставцев Александр Александрович'},
            {title: 'Год рождения', value: '1988'},
            {title: 'Место жительства', value: 'г. Москва, ул. Широкая д.10 к.2'},
            {title: 'Скайп', value: 'thepostas'},
            {title: 'Почта', value: 'thepostas@gmail.com/postas87@mail.ru'},
    ],
    skills: [
        [
            {value: 'БЭМ/OOCSS', checked: true},
            {value: 'Pug (Jade)', checked: false},
            {value: 'Stylus/LESS/SASS', checked: true},
            {value: 'Работаю с SVG', checked: true},
            {value: 'Верстаю семантично', checked: true},
            {value: 'Accessibility (A11Y)', checked: false},
            {value: 'ES2015/ES2016', checked: true},
        ],
        [
            {value: 'Gulp/GRUNT', checked: true},
            {value: 'Webpack', checked: true},
            {value: 'Дружу с WebGL', checked: false},
            {value: 'jQuery', checked: false},
            {value: 'Знаю/изучаю Angular', checked: false},
            {value: 'Знаю/изучаю React', checked: true},
            {value: 'Знаю/изучаю Node.js', checked: false},
        ],
        [
            {value: 'Использую GIT', checked: true},
            {value: 'С глазомером всё ок', checked: true},
            {value: 'Читаю ', checked: false, link: 'blog.csssr.ru', href: 'http://blog.csssr.ru'},
            {value: 'Я ленивый(-ая)', checked: false},
            {value: 'У меня хороший английский', checked: true},
        ]
    ],
    jsSkill: 2,
    additionalInfo: 'С 2012 года я работал специалистом по тендерам, но работа с бумагами вызывала у меня отвращение. Сейчас я решил сменить профессию и в процессе поиска себя узнал от друзей о фронт-энде, попробовал и мне понравилось. Найти первую работу оказалось сложнее, чем я думал, и вот решил попробовать сделать Ваше задание, ведь сразу попасть в крутую компанию, как CSSSR(информация так же от друзей) было бы супер "щикарно". От работы в CSSSR жду максимальной прокачки скилла и второй дом на долгие годы',
    future: 1,
    date: '15.07.2019'
};

export const store = createStore(taskReducer, initialState, applyMiddleware(logger));