import { DL_TARGET_SCORE_PREDICTION, RESET_TARGETSCORE } from "../actions/Types";

const initialState = {
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DL_TARGET_SCORE_PREDICTION:
            return {
                ...state,
                targetScore: action.payload
            }
        case RESET_TARGETSCORE:
            return {
                ...state,
                targetScore: action.payload
            };
        default:
            return state;
    }
}
