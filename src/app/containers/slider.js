import React, { Component } from 'react';
import { connect } from "react-redux";

class SliderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            stateFields: []
        };
        this.initialize = this.props.initialize.bind(this)();
    }

    render () {
        return (
            <div className={'main-content__js-block-slider'}>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_first'}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={0}/><p className={'main-content__js-block-slider-title'}>Не владею</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_second'}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={1}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_third'}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={2}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения и умею их переделывать</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_fourth'}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={3}/><p className={'main-content__js-block-slider-title'}>Пишу сложный JS с нуля</p></label>
            </div>
        )
    }
}

SliderComponent.defaultProps = {

};

const mapStateToProps = function(state) {
    if (!state.fields || state.fields.length !== 0) {
        return {

        };
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        initialize: function() {
            dispatch({
                type: "INITIALIZE",
                payload: {

                }
            });
        }
    };
};



export const Slider = connect(
    mapStateToProps,
    mapDispatchToProps
)(SliderComponent);