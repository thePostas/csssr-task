import React, { Component } from 'react';
import { connect } from "react-redux";

class CheckBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.props.onClick.bind(this);
    }

    render() {
        return (
            <label className={this.props.checked? 'main-content__skills-checkbox-container-label' : 'main-content__skills-checkbox-container-label main-content__skills-checkbox-container-label-checked'}><input type={'checkbox'} className={'main-content__skills-checkbox-container-item'} onClick={this.onClick} value={this.props.value} checked={this.props.checked}/><p className={'main-content__skills-checkbox-container-item-title'}>{this.props.value}</p></label>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: function() {
            dispatch({
                type: "UPDATE_CHECKBOX",
                payload: {
                    title: this.props.value,
                    checked: !this.props.checked
                }
            });
        }
    };
};

export const CheckBox = connect(
    null,
    mapDispatchToProps
)(CheckBoxComponent);