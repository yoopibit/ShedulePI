const context = '';

const API = {
    auth: {
        signIn: `${context}/signin`,
        signOut: `${context}/signout`
    },
    review: {
        getSchedule: `https://schedule-75bea.firebaseio.com/table.json`
    }
}

export default API;