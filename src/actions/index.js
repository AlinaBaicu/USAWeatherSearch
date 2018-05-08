import axios from 'axios';

const API_KEY = '67b56bd48fd1cf1c09f86925c99c002d';
const CORS_API_HOST = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `${CORS_API_HOST}http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//not default
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

//middleware - redux-promise - receive a promise from axios, detect a payload of a promise, resolve promise and send the action to the reducers