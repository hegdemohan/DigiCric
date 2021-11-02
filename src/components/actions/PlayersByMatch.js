import { PLAYERS_BY_MATCH } from './Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const getPlayers = (Mid, Sid) => dispatch => {

    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/playersbymatch.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
        }, "params": {
            "seriesid": Sid,
            "matchid": Mid
        }
    })
        .then((player_by_match) => dispatch({
            type: PLAYERS_BY_MATCH,
            payload: player_by_match.data
        }))
        .catch((error) => {
            console.log(error)
        })
}