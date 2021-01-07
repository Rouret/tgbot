const allChamp = require("../constants/lolChamp.json")
const utils = require("../utils.js")
module.exports = {
    name: 'apex',
    aliases: ['apex'],
    description: 'apex',
    theme: "fun",
    execute(client, api, config, message, args) {

        if (args.length === 1) {
            message.channel.send("Viens apex petit " + args[0])
        }




    },
};