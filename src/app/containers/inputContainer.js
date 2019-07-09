import React from 'react';
import { connect } from "react-redux";
import TextInputComponent from "../components/main/textInputComponent"

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
)(TextInputComponent);