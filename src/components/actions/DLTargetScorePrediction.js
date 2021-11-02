import { DL_TARGET_SCORE_PREDICTION, RESET_TARGETSCORE } from "./Types";
import axios from "axios";
import { requestInterceptor, responseInterceptor } from "../../interceptor";
export const DLTargetScorePrediction = payload => dispatch => {
  axios({
    'method': "POST",
    'url': "http://6562d746.ngrok.io/api/dlmethod/gettargetscore",
    'headers': {
      'Accept': "application/json",
      "Content-Type": "application/json"
    },
    'data': payload
  })
    .then(response =>
      dispatch({
        type: DL_TARGET_SCORE_PREDICTION,
        payload: response.data
      })
    )
    .catch(error => {
      console.log(error);
    });
};
export const resetTargetScore = () => dispatch => {
  dispatch({
    type: RESET_TARGETSCORE,
    payload: undefined
  })
}
