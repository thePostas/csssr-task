import React from "react";

export const Checkbox = props => {
    return (
        <div><input type={'checkbox'} className={'main-content__skills-checkbox-container-item'} value={props.value} checked={props.checked}/>{props.value}</div>
    );
};