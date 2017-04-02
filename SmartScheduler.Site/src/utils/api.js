const context = '';

const API = {
    auth: {
        signIn: `${context}/signin`,
        signOut: `${context}/signout`
    },
    review: {
        getSchedule: `https://schedule-75bea.firebaseio.com/table.json`
    },
    guestReview: {
        schedule: `https://reactapi-aca87.firebaseio.com/schedule.json`
    }
}

export default API;