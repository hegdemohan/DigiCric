import { INNINGS_DETAIL } from "./Types";

export const updateInnings = data => dispatch => {
    return (dispatch({
        type: INNINGS_DETAIL,
        payload: data
    }));
};
