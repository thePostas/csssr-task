import React, { Component } from 'react';
import { connect } from "react-redux";

class DateComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        };
        this.initialize = this.props.initialize.bind(this)();
        this.onChange = this.props.onChange.bind(this);
    }

    render () {
        return (
            <div className={'footer__date'}>
                <label className={'footer__date-label'}>
                    <h3 className={'footer__date-title'}>Дата заполнения</h3>
                    <input onChange={this.onChange} className={'footer__date-input'} type={'text'} value={this.props.date}/>
                </label>
            </div>
        )
    }
}

DateComponent.defaultProps = {
    date: '15.08.1969'
};

const mapStateToProps = function(state) {
    if (state.date && state.date !== 'undefined' && state.date !== null) {
        return {
            date: state.date
        };
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        initialize: function() {
            dispatch({
                type: "INITIALIZE",
                payload: {
                    date: this.state.date
                }
            });
        },
        onChange: function(event) {
            this.setState({value: event.target.value});
            dispatch({
                type: "DATE_INPUT",
                payload: {
                    date: event.target.value,
                }
            });
        }
    };
};



export const Date = connect(
    mapStateToProps,
    mapDispatchToProps
)(DateComponent);