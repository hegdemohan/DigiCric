import { MATCH_DETAIL, RESET_MATCH_DETAILS } from '../actions/Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const getMatchDetails = (Mid, Sid) => dispatch => {

    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/match.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
        }, "params": {
            "seriesid": Sid,
            "matchid": Mid
        }
    })
        .then(match_detail => dispatch({
            type: MATCH_DETAIL,
            payload: match_detail.data
        }))
        // .then((response) => {
        //     console.log(response.data);
        // })
        .catch((error) => {
            console.log(error)
        })
}

export const resetMatchDetails = () => dispatch => {
    dispatch({
        type: RESET_MATCH_DETAILS,
        payload: {}
    })
}
