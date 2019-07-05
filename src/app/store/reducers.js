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
            if (state.length === 0) {

            }
            return Object.assign(
                {},
                state,
                {
                    fields: action.payload.fields.map((field) => {
                        return field;
                    })
                })
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
        default: return state;
    }
}