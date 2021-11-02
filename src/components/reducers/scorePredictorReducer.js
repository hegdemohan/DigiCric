import { FETCH_SCORE_PREDICTION, RESET_PREDICTOR } from '../actions/Types';

const initialState = {
    predictionDetails: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SCORE_PREDICTION:
            return {
                ...state,
                predictionDetails: action.payload
            }
            break;
        case RESET_PREDICTOR:
            return {
                ...initialState
            }
        default:
            return state;
    }
}