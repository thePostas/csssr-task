import React, { Component } from 'react';
import { InputContainer } from '../containers/inputContainer'
import { connect } from "react-redux";

class UserInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            stateFields: []
        };
    }
    render () {
        const currentFields = this.props.fields.map((field, index) => {
            return <InputContainer key={index} fieldId={index} title={field.title} value={field.value}/>
        });
        return (
            <section className={'main-content__user-info'}>
                {currentFields}
            </section>
        )
    }
}

UserInfoComponent.defaultProps = {
    fields: [
        {title: 'Полное ФИО', value: 'Иванов Иван Иванович'},
        {title: 'Год рождения', value: '1990'},
        {title: 'Место жительства', value: 'г. Иваново, Россия'},
        {title: 'Скайп', value: 'ivanov'},
        {title: 'Почта', value: 'ivanov@gmail.com'},
    ]
};

const mapStateToProps = function(state) {
    if (state.fields.length !== 0) {
        return {
            fields: state.fields
        };
    }

};


export const UserInfo = connect(
    mapStateToProps
)(UserInfoComponent);