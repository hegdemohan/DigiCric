import { INNINGS_DETAIL } from "../actions/Types";

const initialState = {

};

export default function (state = initialState, action) {
    switch (action.type) {
        case INNINGS_DETAIL:
            return {
                ...state,
                ing_detail: action.payload
            };
        default:
            return state;
    }
}
