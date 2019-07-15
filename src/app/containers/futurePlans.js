import React, {Component} from "react";
import {connect} from "react-redux";
import RadioButtonComponent from '../components/main/radioButtonComponent'

class FuturePlansComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            radioButtons: [
                {title: 'Верстать', value: 'htmlcss', checked: this.props.future === 0},
                {title: 'Прокачиваться в JS', value: 'JS', checked: this.props.future === 1 },
                {title: 'Менеджерство', value: 'manager', checked: this.props.future === 2},
                {title: 'Другое', value: 'else', checked: this.props.future === 3},
            ]
        };
        this.initialize = this.props.initialize.bind(this)();
    }

    render () {
        const radioButtons = this.state.radioButtons.map((item, index)=> {
            return <RadioButtonComponent className={item.checked ? 'main-content__future-plans-choice-label main-content__future-plans-choice-label_active' : 'main-content__future-plans-choice-label'} onClick={this.props.onClick.bind(this, index)} title={item.title} value={item.value} isChecked={item.checked}/>
        });
        return (
            <section className={'main-content__future-plans main-content__future-plans_position'}>
                <h3 className={'main-content__future-plans-title'}>{this.props.title}</h3>
                <p className={'main-content__future-plans-description'}>{this.props.description}</p>
                <div className="main-content__future-plans-choice">
                    {radioButtons}
                </div>
            </section>
        )
    }
}

FuturePlansComponent.defaultProps = {
    future: 0,
    title: 'Какие у вас планы на будущее?',
    description: 'Этот ответ ни на что не повлияет. Не беда, если в будущем ваши планы поменяются.'
};

const mapStateToProps = function(state) {
    if (state.future && state.future !== 0) {
        return {
            future: state.future
        };
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        initialize: function () {
            dispatch({
                type: "INITIALIZE",
                payload: {
                    future: this.props.future
                }
            });
        },
        onClick: function (currentIndex) {
            const currentRadioButtons = this.state.radioButtons.map((item, index) => {
                item.checked = index === currentIndex;
                return item;
            });
            this.setState({radioButtons: currentRadioButtons});
            console.log(this.state);
            dispatch({
                type: "FUTURE-BLOCK-CHANGE",
                payload: {
                    future: currentIndex
                }
            });
        }
    }
};





export const FuturePlans = connect(
    mapStateToProps,
    mapDispatchToProps
)(FuturePlansComponent);