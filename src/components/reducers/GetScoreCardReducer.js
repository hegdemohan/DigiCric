import { GET_SCORECARD } from '../actions/Types';

const initialState = {
    scoreCard: {},
    summary: "",
    totalScore: {},
    homeTeam: "",
    awayTeam: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SCORECARD:
            return {
                ...state,
                scoreCard: action.payload,
                summary: action.summaryText,
                totalScore: action.totalScore,
                homeTeam: action.homeTeam,
                awayTeam: action.awayTeam
            }
        default:
            return state;
    }
}