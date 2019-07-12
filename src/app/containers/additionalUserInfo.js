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
    }

    render () {
        return (
            <section className={'main-content__additional-info main-content__additional-info_position'}>
                <h3 className={'main-content__additional-info-title'}>Расскажите о себе словами</h3>
                <p className={'main-content__additional-info-description'}>Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</p>
                <textarea className={'main-content__additional-info-input'} onChange={this.onChange}>{this.props.value}</textarea>
            </section>
        )
    }
}

AdditionalUserInfoComponent.defaultProps = {
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
        initialize: function () {
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
        }
    }
};





export const AdditionalUserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdditionalUserInfoComponent);