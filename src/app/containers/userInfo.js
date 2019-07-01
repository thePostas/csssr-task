import React, { Component } from 'react';
import { TextInput } from '../components/main/textInput'
import { connect } from "react-redux";

class userInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            stateFields: []
        };
    }
    render () {
        const currentFields = this.props.fields.map((field) => {
            return <TextInput title={field.title} value={field.value}/>
        });
        return (
            <div className={'main-content__user-info'}>
                {currentFields}
            </div>
        )
    }
}

userInfo.defaultProps = {
    fields: [
        {title: 'Полное ФИО', value: 'Иванов Иван Иванович'},
        {title: 'Год рождения', value: '1990'},
        {title: 'Место жительства', value: 'г. Иваново, Россия'},
        {title: 'Скайп', value: 'ivanov'},
        {title: 'Почта', value: 'ivanov@gmail.com'},
    ]
};

const mapStateToProps = function(state) {
    if (!state.fields) {
        return {
            fields: state.fields
        };
    }
};


export const UserInfo = connect(
    mapStateToProps
)(userInfo);