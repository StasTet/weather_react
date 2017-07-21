import {
    LOAD_DATA_REQUESTED,
    LOAD_DATA_OK,
    LOAD_DATA_FAIL,
    SET_CITY
} from '../constants';

const initialState = {
    city: null,
    data: [],
    errors: null
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_DATA_REQUESTED:
            return {
                city: state.city,
                data: state.data,
                errors: action.errors
            };

        case LOAD_DATA_OK:
            return {
                city: state.city,
                data: [ ...state, action.data],
                errors: action.errors
            };

        case LOAD_DATA_FAIL:
            return {
                ...state, 
                errors: action.errors
            };
        
        case SET_CITY:
            return {
                ...state, city: action.payload
            }

        default:
            return state;
    }
}