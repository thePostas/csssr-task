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
            <div className={'main-content__slider-block-slider'}>
                <label><input type={'radio'} name={'js-skill'} value={0}/>Не владею</label>
                <label><input type={'radio'} name={'js-skill'} value={1}/>Использую готовые решения</label>
                <label><input type={'radio'} name={'js-skill'} value={2}/>Использую готовые решения и умею их переделывать</label>
                <label><input type={'radio'} name={'js-skill'} value={3}/>Пишу сложный JS с нуля</label>
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