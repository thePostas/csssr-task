import React, {Component} from "react";
import {connect} from "react-redux";


class AdditionalUserInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        };
        this.initialize = this.props.initialize.bind(this)();
        this.onChange = this.props.onChange.bind(this);
        this.textAreaHeight = {
            height:  (this.props.value.length / 42 + 1) * 58 + 'px'
        };
    }

    render () {
        return (
            <section className={'main-content__additional-info main-content__additional-info_position'}>
                <h3 className={'main-content__additional-info-title'}>{this.props.title}</h3>
                <p className={'main-content__additional-info-description'}>{this.props.description}</p>
                <textarea className={'main-content__additional-info-input'} style={this.textAreaHeight} onChange={this.onChange}>{this.props.value}</textarea>
            </section>
        )
    }
}

AdditionalUserInfoComponent.defaultProps = {
    title: 'Расскажите о себе словами',
    description: 'Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.',
    value: 'default'
};

const mapStateToProps = function(state) {
    if (state.additionalInfo && state.additionalInfo.length !== 0) {
        return {
            value: state.additionalInfo
        };
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        initialize: function (event) {
            dispatch({
                type: "INITIALIZE",
                payload: {
                    additionalInfo: this.props.value
                }
            });
        },
        onChange: function (event) {
            if (event.target.value.length % 42 === 0) {
                event.target.style.height = (event.target.value.length / 42 + 1) * 58 + 'px';
                }
                dispatch({
                    type: "ADDITIONAL_INFO_INPUT",
                    payload: {
                        additionalInfo: event.target.value,
                    }
                });
        },
        setSize: function (event) {
            event.target.style.height = (event.target.value.length / 42 + 1) * 58 + 'px';
        }
    }
};





export const AdditionalUserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdditionalUserInfoComponent);