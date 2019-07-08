import React, { Component } from 'react';
import { connect } from "react-redux";

class SliderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            stateFields: []
        };
        this.ref = React.createRef();
        this.initialize = this.props.initialize.bind(this)();

    }

    handleClick(position) {
        switch (position) {
            case 0: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_first';
                break;
            }
            case 1: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_second';
                break;
            }
            case 2: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_third';
                break;
            }
            case 3: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_fourth';
                break;
            }
        }
    }

    render () {
        return (
            <div className={'main-content__js-block-slider'}>
                <div className={'main-content__js-block-slider-chosen'} ref={this.ref}/>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_first'} onClick = {this.handleClick.bind(this, 0)}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={0}/><p className={'main-content__js-block-slider-title'}>Не владею</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_second'} onClick = {this.handleClick.bind(this, 1)}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={1}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_third'} onClick = {this.handleClick.bind(this, 2)}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={2}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения и умею их переделывать</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_fourth'} onClick = {this.handleClick.bind(this, 3)}><div className={'main-content__js-block-slider-bar'}/><input className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={3}/><p className={'main-content__js-block-slider-title'}>Пишу сложный JS с нуля</p></label>
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