import React, { Component } from 'react';
import { connect } from "react-redux";

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.onChange = this.props.onChange.bind(this);
    }

    render() {
        return (
            <label className={'main-content__user-info-label profile__title_bold'}>
                <h3 className={'main-content__user-info-title'}>{this.props.title}</h3>
                <input onChange={this.onChange} fieldId={this.props.fieldId} type={'text'} className="main-content__user-info-input" value={this.state.value}/>
            </label>
        )
    }
}

TextInput.defaultProps = {
    title: 'Title',
    value: 'Value'
};

const mapDispatchToProps = function(dispatch) {
    return {
        onChange: function(event) {
            this.setState({value: event.target.value});
                dispatch({
                    type: "INPUT",
                    payload: {
                        inputValue: event.target.value,
                        fieldId: this.props.fieldId
                    }
                });
        }
    };
};

export const InputContainer = connect(
    null,
    mapDispatchToProps
)(TextInput);