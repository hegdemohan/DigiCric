import { FETCH_POST } from '../actions/Types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}