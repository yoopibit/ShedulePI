import axios from 'axios';
import API from '../../utils/api';

// Action types
const LIST_OF_INSTITUTES_REQUEST = 'ss/guest-review/LIST_OF_INSTITUTES_REQUEST';
const LIST_OF_INSTITUTES_RECEIVE = 'ss/guest-review/LIST_OF_INSTITUTE_RECEIVE';
const LIST_OF_INSTITUTES_REJECT = 'ss/guest-review/LIST_OF_INSTITUTE_REJECT';

const LIST_OF_GROUPS_REQUEST = 'ss/guest-review/LIST_OF_GROUPS_REQUEST';
const LIST_OF_GROUPS_RECEIVE = 'ss/guest-review/LIST_OF_GROUPS_RECEIVE';
const LIST_OF_GROUPS_REJECT = 'ss/guest-review/LIST_OF_GROUPS_REJECT';

const LIST_OF_SEMESTERS_REQUEST = 'ss/guest-review/LIST_OF_SEMESTERS_REQUEST';
const LIST_OF_SEMESTERS_RECEIVE = 'ss/guest-review/LIST_OF_SEMESTERS_RECEIVE';
const LIST_OF_SEMESTERS_REJECT = 'ss/guest-review/LIST_OF_SEMESTERS_REJECT';

const SEMESTER_TYPE_REQUEST = 'ss/guest-review/SEMESTER_TYPE_REQUEST';
const SEMESTER_TYPE_RECEIVE = 'ss/guest-review/SEMESTER_TYPE_RECEIVE';
const SEMESTER_TYPE_REJECT = 'ss/guest-review/SEMESTER_TYPE_REJECT'; 

const SCHEDULE_REQUEST = 'ss/guest-review/SCHEDULE_REQUEST';
const SCHEDULE_RECEIVE = 'ss/guest-review/SCHEDULE_RECEIVE';
const SCHEDULE_REJECT = 'ss/guest-review/SCHEDULE_REJECT';

export const initState = {
    institutes: null,
    groups: null,
    semesters: null,
    semestersType: null,
    schedule: null
};

// Reducer
const reducer = (state = initState, action) => {
    const { type } = action;

    switch(type) {
        case LIST_OF_INSTITUTES_REQUEST:
            return state;

        case LIST_OF_INSTITUTES_RECEIVE:
            return {
                ...state,
                institutes: action.institutes
            };

        case LIST_OF_INSTITUTES_REJECT:
            return {
                ...state,
                institutes: action.institutes
            };
        
        case LIST_OF_GROUPS_REQUEST:
            return state;

        case LIST_OF_GROUPS_RECEIVE:
            return {
                ...state,
                groups: action.groups
            };
        
        case LIST_OF_GROUPS_REJECT:
            return {
                ...state,
                groups: action.groups
            };
        
        case LIST_OF_SEMESTERS_REQUEST:
            return state;

        case LIST_OF_SEMESTERS_RECEIVE:
            return {
                ...state,
                semesters: action.semesters
            };

        case LIST_OF_SEMESTERS_REJECT:
            return {
                ...state,
                semesters: action.semesters
            };

        case SEMESTER_TYPE_REQUEST:
            return state;

        case SEMESTER_TYPE_RECEIVE:
            return {
                ...state,
                semestersType: action.semestersType
            };
        
        case SEMESTER_TYPE_REJECT:
            return {
                ...state,
                semestersType: action.semestersType
            };

        case SCHEDULE_REQUEST:
            return state;
        
        case SCHEDULE_RECEIVE:
            return {
                ...state,
                schedule: action.schedule
            };
 
        case SCHEDULE_REJECT:
            return {
                ...state,
                schedule: action.schedule
            };
 
       default:
            return state;
    }
}

// Action creators
const requestListOfInstitutes = () => ({
    type: LIST_OF_INSTITUTES_REQUEST
});

const receiveListOfInstitutes = institutes => ({
    type: LIST_OF_GROUPS_RECEIVE,
    institutes
});

const rejectListOfInstitutes = () => ({
    type: LIST_OF_INSTITUTES_REJECT,
    institutes: null
});

const requestListOfGroups = () => ({
    type: LIST_OF_GROUPS_REQUEST
});

const receiveListOfGroups = groups => ({
    type: LIST_OF_GROUPS_RECEIVE,
    groups
});

const rejectListOfGroups = () => ({
    type: LIST_OF_GROUPS_REJECT,
    groups: null
});

const requestListOfSemesters = () => ({
    type: LIST_OF_SEMESTERS_REQUEST
});

const receiveListOfSemesters = semesters => ({
    type: LIST_OF_GROUPS_RECEIVE,
    semesters
});

const rejectListOfSemesters = () => ({
    type: LIST_OF_SEMESTERS_REJECT,
    semesters: null
});

const requestSemestersType = () => ({
    type: SEMESTER_TYPE_REQUEST 
});

const receiveSemestersType = semestersType => ({
    type: SEMESTER_TYPE_RECEIVE,
    semestersType 
});

const rejectSemestersType = () => ({
    type: SEMESTER_TYPE_REJECT,
    semestersType: null
});

const requestSchedule = () => ({
    type: SCHEDULE_REQUEST 
});

const receiveShcedule = schedule => ({
    type: SCHEDULE_RECEIVE,
    schedule 
});

const rejectShcedule = () => ({
    type: SCHEDULE_REJECT,
    schedule: null
});

// Async action creators
const fetchInstitutes = () => (dispatch, getState) => {
    requestListOfInstitutes();

    const url = API.guestReview.institutes;
    const request = axios.get(url)

    return request 
        .then(response => {
            const { data: institutes } = response;

            dispatch(receiveListOfInstitutes(institutes));
        }, error => {
            const { response } = error;

            if(response) {
                dispatch(rejectListOfInstitutes());
            } else {
                // Either request or i-net issues
                dispatch(push('/not-found'));
            }
        });
};

const fetchListOfGroups = () => (dispatch, getState) => {
    requestListOfGroups();

    const url = API.guestReview.groups;
    const request = axios.get(url)

    return request 
        .then(response => {
            const { data: groups } = response;

            dispatch(receiveListOfGroups(groups));
        }, error => {
            const { response } = error;

            if(response) {
                dispatch(rejectListOfGroups());
            } else {
                // Either request or i-net issues
                dispatch(push('/not-found'));
            }
        });
};

const fetchListOfSemesters = () => (dispatch, getState) => {
    requestListOfSemesters();

    const url = API.guestReview.semesters;
    const request = axios.get(url)

    return request 
        .then(response => {
            const { data: semesters } = response;

            dispatch(receiveListOfSemesters(semesters));
        }, error => {
            const { response } = error;

            if(response) {
                dispatch(rejectListOfSemesters());
            } else {
                // Either request or i-net issues
                dispatch(push('/not-found'));
            }
        });
};

const fetchListOfSemestersType = () => (dispatch, getState) => {
    requestSemestersType();

    const url = API.guestReview.semestersType;
    const request = axios.get(url)

    return request 
        .then(response => {
            const { data: semestersType } = response;

            dispatch(receiveSemestersType(semesterstype));
        }, error => {
            const { response } = error;

            if(response) {
                dispatch(rejectSemestersType());
            } else {
                // Either request or i-net issues
                dispatch(push('/not-found'));
            }
        });
};

const fetchSchedule = () => (dispatch, getState) => {
    requestSchedule();

    const url = API.guestReview.schedule;
    const request = axios.get(url)

    return request 
        .then(response => {
            const { data: schedule } = response;

            dispatch(receiveShcedule(schedule));
        }, error => {
            const { response } = error;

            if(response) {
                dispatch(rejectShcedule());
            } else {
                // Either request or i-net issues
                dispatch(push('/not-found'));
            }
        });
};

export const actionTypes = {
    LIST_OF_INSTITUTES_REQUEST,
    LIST_OF_INSTITUTES_RECEIVE,
    LIST_OF_INSTITUTES_REJECT,

    LIST_OF_GROUPS_REQUEST,
    LIST_OF_GROUPS_RECEIVE,
    LIST_OF_GROUPS_REJECT,

    LIST_OF_SEMESTERS_REQUEST,
    LIST_OF_SEMESTERS_RECEIVE,
    LIST_OF_SEMESTERS_REJECT,

    SEMESTER_TYPE_REQUEST,
    SEMESTER_TYPE_RECEIVE,
    SEMESTER_TYPE_REJECT,

    SCHEDULE_REQUEST,
    SCHEDULE_RECEIVE,
    SCHEDULE_REJECT
};

export const actionCreators = {
    requestListOfInstitutes,
    receiveListOfInstitutes,
    rejectListOfInstitutes,

    requestListOfGroups,
    receiveListOfGroups,
    rejectListOfGroups,

    requestListOfSemesters,
    receiveListOfSemesters,
    rejectListOfSemesters,

    requestSemestersType,
    receiveSemestersType,
    rejectSemestersType,

    requestSchedule,
    receiveShcedule,
    rejectShcedule,

    // Async
    fetchInstitutes,
    fetchListOfGroups,
    fetchListOfSemesters,
    fetchListOfSemestersType,
    fetchSchedule
};

export default reducer;

