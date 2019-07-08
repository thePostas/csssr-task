import React, {Component} from "react";
import {connect} from "react-redux";
import { CheckBox } from "../containers/checkbox"

class SkillsComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
        };
        this.initialize = this.props.initialize.bind(this)();
    }

    render () {
        const firstContainer = this.props.skills[0].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} link={item.link} href={item.href} key={index}/>
          });
        const secondContainer = this.props.skills[1].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} link={item.link} href={item.href} key={index}/>
        });
        const thirdContainer = this.props.skills[2].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} link={item.link} href={item.href} key={index}/>
        });
        return (
            <section className={'main-content__skills main-content__skills_position'}>
                <div className="main-content__skills-title">Расскажите о себе чекбоксами</div>
                <div className="main-content__skills-description">Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей. Это означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.</div>
                <div className="main-content__skills-checkboxes-set">
                    <div className={'main-content__skills-checkbox-container'}>{firstContainer}</div>
                    <div className={'main-content__skills-checkbox-container'}>{secondContainer}</div>
                    <div className={'main-content__skills-checkbox-container main-content__skills-checkbox-container-third'}>{thirdContainer}</div>
                </div>

            </section>
        )
    }
}

SkillsComponent.defaultProps = {
    skills: [
        [
            {value: 'БЭМ/OOCSS', checked: true},
            {value: 'Pug (Jade)', checked: true},
            {value: 'Stylus/LESS/SASS', checked: true},
            {value: 'Работаю с SVG', checked: false},
            {value: 'Верстаю семантично', checked: false},
            {value: 'Accessibility (A11Y)', checked: false},
            {value: 'ES2015/ES2016', checked: false},
        ],
        [
            {value: 'Gulp/GRUNT', checked: false},
            {value: 'Webpack', checked: false},
            {value: 'Дружу с WebGL', checked: false},
            {value: 'jQuery', checked: false},
            {value: 'Знаю/изучаю Angular', checked: false},
            {value: 'Знаю/изучаю React', checked: false},
            {value: 'Знаю/изучаю Node.js', checked: false},
        ],
        [
            {value: 'Использую GIT', checked: false},
            {value: 'С глазомером всё ок', checked: false},
            {value: 'Читаю ', checked: false, link: 'blog.csssr.ru', href: 'http://blog.csssr.ru'},
            {value: 'Я ленивый(-ая)', checked: false},
            {value: 'У меня хороший английский', checked: false},
        ]
    ]
};

const mapStateToProps = function(state) {
    if (!state.skills || state.skills.length !== 0) {
        return {
            skills: state.skills
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



export const SkillsBlock = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillsComponent);