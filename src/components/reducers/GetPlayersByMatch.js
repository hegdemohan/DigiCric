import { PLAYERS_BY_MATCH } from '../actions/Types';

const initialState = {
    players_by_match: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case PLAYERS_BY_MATCH:
            return {
                ...state,
                players_by_match: action.payload
            }
        default:
            return state;
    }
}