import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const convertToCsv = (data) => dispatch => {
    axios({
        "method": "POST",
        "url": "http://6562d746.ngrok.io/api/updatedata/updateodidata",
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "data": data
    })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}