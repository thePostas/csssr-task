import React from 'react';
import { connect } from "react-redux";
import checkBoxComponent from "../components/main/checkBoxComponent"

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
)(checkBoxComponent);