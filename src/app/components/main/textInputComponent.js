import React, { Component } from 'react';

export default class TextInputComponent extends Component {
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

TextInputComponent.defaultProps = {
    title: 'Title',
    value: 'Value'
};