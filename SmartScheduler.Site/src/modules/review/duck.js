import axios from 'axios';
import API from '../../utils/api';

// Actions
const GET_SCHEDULE_REQUEST = 'ss/review/GET_SCHEDULE_REQUEST';
const GET_SCHEDULE_FULFILLED = 'ss/review/GET_SCHEDULE_FULFILLED';
const GET_SCHEDULE_FAILURE = 'ss/review/GET_SCHEDULE_FAILURE';

// Init state
const initState = {
    schedule: null,
    isLoading: true
}

// Reducer
const reducer = (state = initState, action) => {
    switch(action.type) {
        case GET_SCHEDULE_REQUEST:
            return state;
        case GET_SCHEDULE_FULFILLED:
            return {
                ...state,
                schedule: action.schedule,
                isLoading: action.isLoading
            }
        case GET_SCHEDULE_FAILURE: 
            return {
                ...state,   
                schedule: action.schedule
            }
        default:
            return state;
    }
}

// Action creators
const getScheduleRequest = () => ({
    type: GET_SCHEDULE_REQUEST
});

const getScheduleFulfilled = schedule => ({   
    type: GET_SCHEDULE_FULFILLED,
    isLoading: false,  
    schedule
});

const getScheduleFailure = () => ({
    type: GET_SCHEDULE_FAILURE,
    schedule: null
});


// Async actions
const getSchedule = () => dispatch => {
    
    dispatch(getScheduleRequest());
    return axios.get('https://schedule-75bea.firebaseio.com/table.json')
        .then(response => {

            dispatch(getScheduleFulfilled(response.data));
        })
        .catch(error => {
            dispatch(getScheduleFailure());
            // debugger;
            
        });
}
// Exports
export const actionTypes = {
    GET_SCHEDULE_REQUEST,
    GET_SCHEDULE_FULFILLED,
    GET_SCHEDULE_FAILURE
}

export const actionCreators = {
    getSchedule
}

export default reducer;