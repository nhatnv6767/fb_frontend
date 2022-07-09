/**
 * If the action type is "LOGIN", return the payload. Otherwise, return the state
 * @param [state=null] - the current state of the reducer.
 * @param action - This is the action object that was dispatched.
 * @returns The user object
 */
export function userReducer(state = null, action) {
    switch (action.type) {
        case "LOGIN":
            return action.payload;

        default:
            return state;
    }
}