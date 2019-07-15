import React from 'react';
import { Slider } from '../../containers/slider'

export const JSBlock = props => {
    return (
        <section className={"main-content__js-block main-content__js-block_position"}>
            <h3 className={'main-content__js-block-title'}>{props.title || 'Уровень владения JavaScript'}</h3>
            <Slider/>
        </section>
    );
};