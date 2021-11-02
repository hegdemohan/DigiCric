import axios from 'axios';
import CommonService from './commonService';
import _ from 'lodash';
import { Promise } from 'q';

let app;
let requestCounter = 0;
export const requestInterceptor = axios.interceptors.request.use(async function (config) {
    app = CommonService.getAppContext();
    requestCounter++;
    app.setLoader(true);
    return config;
}, function (error) {
    requestCounter--;
    if (requestCounter === 0) {
        app.setLoader(false);
    }
    return Promise.reject(error);
});

export const responseInterceptor = axios.interceptors.response.use(function (response) {
    requestCounter--;
    if (requestCounter === 0) {
        // app.setLoader(false);
        setTimeout(app.setLoader(false), 3000)
    }
    return response;
}, function (error) {
    requestCounter--;
    // if (requestCounter === 0) {
    // app.setLoader(false);
    // }
    // return Promise.reject(error);

});