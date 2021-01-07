const allChamp = require("../constants/lolChamp.json")
const utils = require("../utils.js")
module.exports = {
    name: 'lol',
    aliases: ['lol', 'champ'],
    description: 'Random pick',
    theme: "fun",
    execute(client, api, config, message, args) {
        const allNames = allChamp.map(champ => champ.name);
        switch (args.length) {
            case 0:
                message.delete()
                    //return message.channel.send("Champions: " + allNames])
                const index = [utils.getRandom(0, allNames.length - 1)]
                const current = allChamp[index]
                return message.channel.send({
                    embed: {
                        color: "orange",
                        author: {
                            name: current.name,
                            icon_url: current.icon
                        },
                        description: current.tags.join(', '),
                    }
                });
            case 1:
                message.channel.send("Go LoL enculé" + args[0])
        }


    },
};