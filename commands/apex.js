module.exports = {
    name: 'apex',
    aliases: ['apex'],
    description: 'Demande a qql de jouer',
    theme: "game",
    execute(client, api, config, message, args) {
        
        if (args.length === 1 && message.mentions.members.first()) {
            message.channel.send("Viens apex petit " + args[0])
        }else{
            message.channel.send("Mentionne quelqu'un apres '!apex' :D")
        }
    },
};