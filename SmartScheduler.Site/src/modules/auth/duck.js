import API from '../../utils/api';
import { SubmissionError } from 'redux-form';
import axios from 'axios';

// Actions
const SIGNIN_REQUEST = 'ss/auth/SIGNIN_REQUEST';
const SIGNIN_FULFILLED = 'ss/auth/SIGNIN_FULFILLED';
const SIGNIN_FAILURE = 'ss/auth/SIGNIN_FAILURE';
const SIGNOUT = 'ss/auth/SIGNOUT';

const TOKEN_GET = 'ss/auth/TOKEN_GET';
const TOKEN_RECEIVE = 'ss/auth/TOKEN_RECEIVE';
const TOKEN_REJECT = 'ss/auth/TOKEN_REJECT';

// Init state
const initState = {
    profile: {
        token: null
    },
}

// Reducer
const reducer = (state = initState, action) => {
    switch(action.type) {
        case SIGNIN_REQUEST:
            return state;
        case SIGNIN_FULFILLED:
        case SIGNIN_FAILURE: 
            return {
                ...state,
                profile: action.profile
            };
        case TOKEN_GET:
        case TOKEN_RECEIVE:
            return state;
        case TOKEN_REJECT:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    token: null
                }
            };
        default:
            return state;
    }
}

// Action creators
const signInRequest = () => ({
    type: SIGNIN_REQUEST
});

const signInFulfilled = profile => ({
    type: SIGNIN_FULFILLED,
    profile
});

const signInFailure = () => ({
    type: SIGNIN_FAILURE,
    profile: null
});

const getToken = () => ({
    type: TOKEN_GET
});

const receiveToken = () => ({
    type: TOKEN_RECEIVE
});

const rejectToken = () => ({
    type: TOKEN_REJECT,
    token: null
});

// Async actions
const signIn = credentials => dispatch => {
    dispatch(signInRequest());

    // Create new instance of axios to prevent using general axios.config
    const authAxios = axios.create();

    const config = {
        auth: {
            username: credentials.username,
            password: credentials.password
        }
    }

    return authAxios.post(API.auth.signIn, null, config)
        .then(response => {
            const profile = response.data;
            dispatch(signInFulfilled(profile));
        })
        .catch(error => {
            dispatch(signInFailure());

            throw new SubmissionError({ username: 'An unexpeted error occured', password: 'An unexpected error occured' });
        });
}

const signOut = () => dispatch => {
    return axios.post(API.auth.signOut);
}

const fetchToken = callback => dispatch => {
    getToken();

    return axios.get(API.auth.auth)
        .then(response => {
            receiveToken();
            callback();
        })
        .catch(error => {
            rejectToken();
        });
}

// Exports
export const actionTypes = {
    SIGNIN_REQUEST,
    SIGNIN_FULFILLED,
    SIGNIN_FAILURE,
    SIGNOUT,

    TOKEN_GET,
    TOKEN_RECEIVE,
    TOKEN_REJECT
}

export const actionCreators = {
    signIn,
    signOut,
    fetchToken
}

export default reducer;