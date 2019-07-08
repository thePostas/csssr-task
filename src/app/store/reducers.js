export function taskReducer(state = {}, action) {
    switch (action.type) {
        case "INPUT": {
            return Object.assign(
                {},
                state,
                {
                    fields: state.fields.map((field, index) => {
                        if (index === action.payload.fieldId) field.value = action.payload.inputValue;
                        return field;
                    })
                })
        }
        case "INITIALIZE": {
            if (action.payload.fields) {
                return Object.assign(
                    {},
                    state,
                    {
                        fields: action.payload.fields.map((field) => {
                            return field;
                        })
                    })
            }
            if (action.payload.skills) {
                return Object.assign(
                    {},
                    state,
                    {
                        skills: action.payload.skills.map((block, index) => {
                            block.map((item) => {
                                if (item.value === action.payload.title) {
                                    item.checked = action.payload.checked;
                                }
                                return item;
                            });
                            return block;
                        })
                    })
            }
            if (action.payload.jsSkill) {
                return Object.assign(
                    {},
                    state,
                    {
                        jsSkill: action.payload.jsSkill
                    })
            }
        }
        case "UPDATE_CHECKBOX": {
            return Object.assign(
                {},
                state,
                {
                    skills: state.skills.map((block, index) => {
                        block.map((item) => {
                            if (item.value === action.payload.title) {
                                item.checked = action.payload.checked;
                            }
                            return item;
                        });
                        return block;
                    })
                })
        }
        case "SET_SLIDER_VALUE": {
            return Object.assign(
                {},
                state,
                {
                    jsSkill: action.payload.jsSkill
                })
        }
        default: return state;
    }
}