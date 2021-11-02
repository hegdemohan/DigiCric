import { MATCH_DETAIL, RESET_MATCH_DETAILS } from '../actions/Types';

const initialState = {
    match_detail: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MATCH_DETAIL:
            return {
                ...state,
                match_detail: action.payload
            }
            break;
        case RESET_MATCH_DETAILS:
            return{
                ...initialState
            }
        default:
            return state;
    }
}