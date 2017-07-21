import axios from 'axios';
import {
            LOAD_DATA_REQUESTED,
            LOAD_DATA_OK,
            LOAD_DATA_FAIL,
            SET_CITY
        } from '../constants';

const getData = (urlJson) => {
    return (dispatch) => {
        dispatch({
            type: LOAD_DATA_REQUESTED,
            data: [],
            errors: null
        });

        axios
            .get(urlJson)
            .then((res) => {
                dispatch({
                    type: LOAD_DATA_OK,
                    data: res.data,
                    errors: null
                })
            })
            .catch((err) => {
                dispatch({
                    type: LOAD_DATA_FAIL,
                    data: [],
                    errors: `${err}`
                })
            })
    }
}

const setCity = (value) => {
    return {
        type: SET_CITY,
        payload: value
    }
}

export { getData, setCity }
