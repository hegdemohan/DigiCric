import { FETCH_POST } from '../actions/Types';
import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "../../interceptor";

export const fetchPosts = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts.data
        }));
}
