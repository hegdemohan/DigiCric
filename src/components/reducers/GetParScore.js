import { PAR_SCORE_PREDICTION, RESET_PARSCORE } from "../actions/Types";

const initialState = {
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PAR_SCORE_PREDICTION:
            return {
                ...state,
                parScore: action.payload
            }
        case RESET_PARSCORE:
            return {
                parScore: action.payload
            };
        default:
            return state;
    }
}
