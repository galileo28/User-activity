const githubApi = require('../lib/githubApi');
const errorHandler = require('../utils/errorHandler');

async function fetchActivity(username) {
    try {
        const events = await githubApi.getUserEvents(username);
        events.forEach(event => {
            console.log(`${event.type} at ${event.repo.name}`);
        });
    } catch (error) {
        errorHandler(error);
    }
}

module.exports = fetchActivity;