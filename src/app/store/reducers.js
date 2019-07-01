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
            return Object.assign(
                {},
                state,
                {
                    fields: action.payload.fields.map((field) => {
                        return field;
                    })
                })
        }
        default: return state;
    }
}