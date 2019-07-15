import React, { Component } from 'react';

export default class RadioButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <label className={this.props.className}>
                <input className={'main-content__future-plans-choice-input'} onClick={this.props.onClick.bind(this)} name={this.props.name} value={this.props.value} type={'radio'} checked={this.props.isChecked}/>
                <p className={'main-content__future-plans-choice-title'}>
                    {this.props.title}
                </p>
            </label>
        )
    }
}

RadioButtonComponent.defaultProps = {
    title: 'Title',
    value: 'value',
    name: 'future',
    isChecked: false
};