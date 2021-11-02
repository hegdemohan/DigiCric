import { GET_BAT_BOWL } from '../actions/Types';

const initialState = {
    bat_bowl: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BAT_BOWL:
            return {
                bat_bowl: action.payload
            }
        default:
            return state;
    }
}