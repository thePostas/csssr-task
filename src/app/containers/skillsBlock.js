import React, {Component} from "react";
import {connect} from "react-redux";
import { CheckBox } from "../containers/checkbox"

class SkillsComponent extends Component{
    constructor(props) {
        super(props);
    }

    render () {
        const firstContainer = this.props.skills[0].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} key={index}/>
          });
        const secondContainer = this.props.skills[1].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} key={index}/>
        });
        const thirdContainer = this.props.skills[2].map((item, index) => {
            return <CheckBox value={item.value} checked={item.checked} key={index}/>
        });
        console.log(firstContainer);
        return (
            <section className={'main-content__skills'}>
                <div className={'main-content__skills-checkbox-container'}>{firstContainer}</div>
                <div className={'main-content__skills-checkbox-container'}>{secondContainer}</div>
                <div className={'main-content__skills-checkbox-container'}>{thirdContainer}</div>
            </section>
        )
    }
}

const mapStateToProps = function(state) {
    if (!state.fields || state.fields.length !== 0) {
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
                    fields: this.state.fields
                }
            });
        }
    };
};



export const SkillsBlock = connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillsComponent);