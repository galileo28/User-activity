const { makeRequest } = require('./httpClient');
const { ENDPOINTS } = require('../config/api');

function getUserEvents(username) {
    return makeRequest(ENDPOINTS.USER_EVENTS(username));
}

function getUserRepos(username) {
    return makeRequest(ENDPOINTS.USER_REPOS(username));
}


module.exports = {
    getUserEvents,
    getUserRepos
};