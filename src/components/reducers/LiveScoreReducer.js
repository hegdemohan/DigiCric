import { LIVE_SCORE } from '../actions/Types';

const initialState = {
    scores: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LIVE_SCORE:
            return {
                ...state,
                scores: action.payload
            }

        default:
            return state;
    }
}