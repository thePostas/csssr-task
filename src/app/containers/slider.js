import React, { Component } from 'react';
import { connect } from "react-redux";

class SliderComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.ref = React.createRef();
        this.initialize = this.props.initialize.bind(this)();
        this.setSkill = this.props.setSkill.bind(this);
    }

    setPosition(position) {
        switch (position) {
            case 0: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_first';
                this.setSkill(position);
                break;
            }
            case 1: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_second';
                this.setSkill(position);
                break;
            }
            case 2: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_third';
                this.setSkill(position);
                break;
            }
            case 3: {
                this.ref.current.className = 'main-content__js-block-slider-chosen main-content__js-block-slider-chosen_fourth';
                this.setSkill(position);
                break;
            }
        }
    }

    render () {
        return (
            <div className={'main-content__js-block-slider'}>
                <div className={'main-content__js-block-slider-chosen'} ref={this.ref}/>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_first'} ><div className={'main-content__js-block-slider-bar'}/><input onClick = {this.setPosition.bind(this, 0)} className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={0}/><p className={'main-content__js-block-slider-title'}>Не владею</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_second'}><div className={'main-content__js-block-slider-bar'}/><input onClick = {this.setPosition.bind(this, 1)} className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={1}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_third'}><div className={'main-content__js-block-slider-bar'}/><input onClick = {this.setPosition.bind(this, 2)} className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={2}/><p className={'main-content__js-block-slider-title'}>Использую готовые решения и умею их переделывать</p></label>
                <label className={'main-content__js-block-slider-label main-content__js-block-slider-label_fourth'}><div className={'main-content__js-block-slider-bar'}/><input onClick = {this.setPosition.bind(this, 3)} className={'main-content__js-block-slider-input'} type={'radio'} name={'js-skill'} value={3}/><p className={'main-content__js-block-slider-title'}>Пишу сложный JS с нуля</p></label>
            </div>
        )
    }
}

SliderComponent.defaultProps = {
    jsSkill: 1
};

const mapStateToProps = function(state) {
    if (state.jsSkill || state.jsSkill !== 'undefined' || state.jsSkill !== null) {
        return {
            jsSkill: state.jsSkill
        };
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        initialize: function() {
            dispatch({
                type: "INITIALIZE",
                payload: {
                    jsSkill: this.props.jsSkill
                }
            });
        },
        setSkill: function (value) {
            dispatch({
                type: "SET_SLIDER_VALUE",
                payload: {
                    jsSkill: value
                }
            })
        }
    };
};



export const Slider = connect(
    mapStateToProps,
    mapDispatchToProps
)(SliderComponent);