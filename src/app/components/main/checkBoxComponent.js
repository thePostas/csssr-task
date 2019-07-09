import React, {Component} from "react";

export default class CheckBoxComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.props.onClick.bind(this);
    }

    render() {
        return (
            <label className={this.props.checked ? 'main-content__skills-checkbox-container-label main-content__skills-checkbox-container-label-checked' : 'main-content__skills-checkbox-container-label'}><input type={'checkbox'} className={'main-content__skills-checkbox-container-item'} onClick={this.onClick} value={this.props.value} checked={this.props.checked}/><p className={'main-content__skills-checkbox-container-item-title'}>{this.props.value}{this.props.link ? <a className={'main-content__skills-checkbox-container-item-link'} target={"_blank"} href={this.props.href}>{this.props.link}</a> : null}</p></label>
        )
    }
}