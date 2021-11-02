import { GET_COMMENTS } from '../actions/Types';

const initialState = {
    comments: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                comments: action.payload
            }
        default:
            return state;
    }
}