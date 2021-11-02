import { PAR_SCORE_PREDICTION, RESET_PARSCORE } from "./Types";
import axios from "axios";
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const parScore = payload => dispatch => {
    axios({
        'method': "POST",
        'url': "http://6562d746.ngrok.io/api/dlmethod/getparscore",
        'headers': {
            'Accept': "application/json",
            "Content-Type": "application/json"
        },
        'data': payload
    })
        .then(response =>
            dispatch({
                type: PAR_SCORE_PREDICTION,
                payload: response.data
            })
        )
        .catch(error => {
            console.log(error);
        });
};
export const resetParScore = () => dispatch => {
    dispatch({
        type: RESET_PARSCORE,
        payload: undefined
    })
}
