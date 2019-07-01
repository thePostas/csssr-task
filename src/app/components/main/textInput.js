import React from "react";

export const TextInput = props => {
    return (
        <label className={'main-content__user-info-label'}>
            <h3>{props.title}</h3>
            <input type={'text'} className="main-content__user-info-input" value={props.value}/>
        </label>

    )
};

TextInput.defaultProps = {
    title: 'Title',
    value: 'Value'
};