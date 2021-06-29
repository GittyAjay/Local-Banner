const initialState = {
    isSignin: false
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignin: true
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignin: false
            }
        default:
            return state
    }
}