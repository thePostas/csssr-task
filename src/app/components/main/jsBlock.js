import React from 'react';
import { Slider } from '../../containers/slider'

export const JSBlock = props => {
    return (
        <section className={"main-content__js-block"}>
            <h3 className={'main-content__slider-js-block-title'}>Уровень владения JavaScript</h3>
            <Slider/>
        </section>
    );
};