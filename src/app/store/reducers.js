export function taskReducer(state = {}, action) {
    switch (action.type) {
        case "HANDLE_INPUT": {
            return Object.assign(
                {},
                state,
                {
                    input: action.payload.inputValue
                })
        }
        default: return state;
    }
}