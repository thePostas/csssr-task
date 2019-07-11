import React, {Component} from "react";
import {connect} from "react-redux";

class AdditionalUserInfoComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        };
        this.handleChange = this.handleChange.bind(this);
        // this.initialize = this.props.initialize.bind(this)();
    }

    handleChange = (event) => {
        // this.setState({value: event.target.value});
        console.log(event.target.value.length);
        if (event.target.value.length % 42 === 0) {
            event.target.style.height = (event.target.value.length / 42 + 1) * 58 + 'px'
        }
    };

    render () {
        return (
            <section className={'main-content__additional-info main-content__additional-info_position'}>
                <h3 className={'main-content__additional-info-title'}>Расскажите о себе словами</h3>
                <p className={'main-content__additional-info-description'}>Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</p>
                <textarea className={'main-content__additional-info-input'} onChange={this.handleChange} value={this.props.value}/>
            </section>
        )
    }
}

AdditionalUserInfoComponent.defaultProps = {
    additionalInfo: 'default'
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
        initialize: function() {
            dispatch({
                type: "INITIALIZE",
                payload: {
                    skills: this.props.skills
                }
            });
        }
    };
};



export const AdditionalUserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdditionalUserInfoComponent);