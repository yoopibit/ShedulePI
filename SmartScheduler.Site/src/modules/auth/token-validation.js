import { push } from 'react-router-redux';
import { actionCreators as authActionCreator } from './duck';

/*
 * requireAuth - check user token. If user has correct token, access granted.
 * If user has no 'token' -> redirect to login page
 */
export const requireAuth = store => (nextState, replace, callback) => {

    const token = store.getState().auth.profile.token;


    if(token) {
        /**
         * We pass 'callback' to 'verifyToken' function for redirect purposes.
         * If user has correct token invoke 'callback()' and it redirect him to desired page.
         * 'callback' function comes from 'react-route'
         */
        store.dispatch(authActionCreator.fetchToken(callback));
    } else {
        store.dispatch(push('/login'));
    }
};

/*
 * checkAuth - check user token. If user has correct token redirect him to another page.
 * Otherwise, stay at 'login' page
 * P.S. Don't show 'login' page to already logged users
 */
export const checkAuth = store => () => {
    const token = store.getState().auth.profile.token;

    if(token) {
        store.dispatch(push('/review'));
    }
}