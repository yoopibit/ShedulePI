import { combineReducers } from 'redux';

// Imported reducers
import { reducer as authReducer } from './modules/auth';
import { reducer as reviewReducer } from './modules/review';
import { reducer as formReducer } from 'redux-form';
import { reducer as guestReviewReducer } from './modules/guest-review';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    auth: authReducer,
    review: reviewReducer,
    guestReview: guestReviewReducer,
    form: formReducer,
    routing: routerReducer
});

export default rootReducer;