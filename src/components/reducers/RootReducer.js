import { combineReducers } from "redux";
import postsReducer from "../reducers/PostReducer";
import liveScoreReducer from "../reducers/LiveScoreReducer";
import getImageReducer from "./GetCommentsReducer";
import getScoreCardReducer from "../reducers/GetScoreCardReducer";
import getMatchDetail from "../reducers/GetMatchDetail";
import getPlayersByMatch from "../reducers/GetPlayersByMatch";
import getCommentsByMatch from "../reducers/GetCommentsReducer";
import getCurrBat_Bowl from "../reducers/GetCurrentBatAndBowl";
import seriesDetailsReducer from "./SeriesDetailsReducer";
import scorePredictorReducer from "./scorePredictorReducer";
import dlTargetScorePrediction from "./GetTargetScore";
import fullInningsDetail from "./GetInningsDetail";
import parScorePrediction from "./GetParScore";

export default combineReducers({
    posts: postsReducer,
    liveScore: liveScoreReducer,
    getImages: getImageReducer,
    getScoreCard: getScoreCardReducer,
    getMatchDetails: getMatchDetail,
    getPlayersByMatch: getPlayersByMatch,
    getCommentsByMatch: getCommentsByMatch,
    getCurrBat_Bowl: getCurrBat_Bowl,
    seriesDetails: seriesDetailsReducer,
    scorePredictor: scorePredictorReducer,
    targetScoreDetails: dlTargetScorePrediction,
    innings: fullInningsDetail,
    parScoreDetails: parScorePrediction
});
