const allChamp = require("../constants/lolChamp.json")
const utils = require("../utils.js")
module.exports = {
    name: 'lol',
    aliases: ['lol', 'champ'],
    description: 'Random pick',
    theme: "fun",
    execute(client, api, config, message, args) {
        const allNames = allChamp.map(champ => champ.name);
        if(args.length===0){
            message.delete()
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
        }

        if(args.length===1 && message.mentions.members.first())return message.channel.send("Go LoL enculé " + args[0])
        


    },
};