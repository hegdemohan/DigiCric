import { GET_BAT_BOWL } from '../actions/Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const getCurrentScore = (Mid, Sid) => dispatch => {

    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matchdetail.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
        }, "params": {
            "seriesid": Sid,
            "matchid": Mid
        }
    })
        .then(curr_score => dispatch({
            type: GET_BAT_BOWL,
            payload: curr_score.data
        }))
        // .then((response) => {
        //     console.log(response.data);
        // })
        .catch((error) => {
            console.log(error)
        })
}
