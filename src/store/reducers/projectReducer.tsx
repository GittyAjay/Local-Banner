const initialState = {
    advertisments: [],
}

export default function doctorsReducer(state = initialState, action: any) {

    switch (action.type) {
        case 'ADVERTISMENTS':
            return {
                ...state,
                advertisments: [...state.advertisments, action.payload]
            }
        case 'CLEAR_DEFAULT':
            return {
                ...state,
                advertisments: [],
            }
        default:
            return state
    }
}