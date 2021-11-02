import { FETCH_ALL_SERIES, FETCH_SERIES_TEAMS, FETCH_SERIES_STANDINGS, RESET_SERIES } from '../actions/Types';

const initialState = {
    seriesDetails: {
        seriesList: {
            series: [],
            seriesList:{
                series:[]
            }
        }
    },
    seriesTeams: {
        meta: {},
        seriesTeams: {
            teams: []
        }
    },
    seriesStandings: {
        teams: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_SERIES:
            return {
                ...state,
                seriesDetails: action.payload
            }
        case FETCH_SERIES_TEAMS:
            return {
                ...state,
                seriesTeams: action.payload
            }
        case FETCH_SERIES_STANDINGS:
            return {
                ...state,
                seriesStandings: action.payload
            }
        case RESET_SERIES:
            return {
                ...initialState
            }
        default:
            return state;
    }
}