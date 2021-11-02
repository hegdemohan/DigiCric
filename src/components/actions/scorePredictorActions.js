import { FETCH_SCORE_PREDICTION, RESET_PREDICTOR } from './Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const fetchPrediction = (matchType, payload) => dispatch => {
    let match;
    if (parseInt(payload.maxStrikerScore) < parseInt(payload.minStrikerScore)) {
        let temp = payload.maxStrikerScore;
        payload.maxStrikerScore = payload.minStrikerScore;
        payload.minStrikerScore = temp;
    }
    if (matchType.includes("t20")) {
        match = "t20";
    } else if (matchType === "odi") {
        match = "odi";
    }
    
    if (match !== undefined) {
        if(parseInt(payload.overs) === 20 && match === "t20"){
            return dispatch({
                type: FETCH_SCORE_PREDICTION,
                payload: {"accuracy":"100","predictionScore":parseInt(payload.runs)}
            });
        }else if(parseInt(payload.overs) === 50 && match === "odi"){
            return dispatch({
                type: FETCH_SCORE_PREDICTION,
                payload: {"accuracy":"100","predictionScore":parseInt(payload.runs)}
            });
        }
        axios({
            "method": "POST",
            "url": "http://1e70f7fb.ngrok.io/" + match,
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "data": payload
        })
            .then((response) => dispatch({
                type: FETCH_SCORE_PREDICTION,
                payload: response.data
            }))
            .catch((error) => {
                console.log(error);
            })
    }
}
export const resetPrediction = () => dispatch => {
    dispatch({
        type: RESET_PREDICTOR,
        payload: {}
    })
}