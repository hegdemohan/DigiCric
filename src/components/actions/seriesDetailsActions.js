import { FETCH_ALL_SERIES, FETCH_SERIES_TEAMS, FETCH_SERIES_STANDINGS, RESET_SERIES } from './Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

const headers = {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
    "x-rapidapi-key": "5b6bac07f2mshbacedf94d8d5a12p10e35ajsn0d32354f31a4"
}

export const fetchAll = () => dispatch =>{
    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/series.php",
        "headers": headers
    })
    .then((response) => dispatch({
        type: FETCH_ALL_SERIES,
        payload: response.data
    }))
    .catch((error)=>{
        console.log(error);
    })
}

export const fetchSeriesTeams = (seriesId) => dispatch =>{
    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/seriesteams.php?seriesid="+seriesId,
        "headers": headers
    })
    .then((response) => dispatch({
        type: FETCH_SERIES_TEAMS,
        payload: response.data
    }))
    .catch((error)=>{
        console.log(error);
    })
}

export const fetchSeriesStandings = (seriesId) => dispatch =>{
    axios({
        "method": "GET",
        "url": "https://dev132-cricket-live-scores-v1.p.rapidapi.com/seriesstandings.php?seriesid="+seriesId,
        "headers": headers
    })
    .then((response) => dispatch({
        type: FETCH_SERIES_STANDINGS,
        payload: response.data
    }))
    .catch((error)=>{
        console.log(error);
    })
}

export const resetSeriesStats = () => dispatch =>{
    dispatch({
        type: RESET_SERIES,
        payload: {}
    })
}