const {WebClient, LogLevel} = require("@slack/web-api");

new WebClient('XXX', {logLevel: LogLevel.ERROR})
    .users.list()
    .then(x => console.log(JSON.stringify(x, null, 2)))
    .catch(x => console.log(x.message, JSON.stringify(x, null, 2)));
