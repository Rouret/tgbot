const fetch = require("node-fetch");
module.exports = {
    name: 'faim',
    aliases: ['food', 'toutdanslegosier'],
    description: 'Pour te faire regretter tes pâtes',
    execute(client, api, config, message, args) {
        message.delete()
        fetch("https://foodish-api.herokuapp.com/api", {})
            .then((response) => response.json())
            .then((data) => {
                message.channel.send(data.image);
            });
    },
};