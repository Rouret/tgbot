const fetch = require("node-fetch");
const Game = require("../models/Game")
var actualGame = null;
module.exports = {
    name: 'game',
    aliases: ['play', "g"],
    description: 'Petit jeu',
    theme: "fun",
    execute(client, api, config, message, args) {
        // message.delete()
        // if (args.length === 0) {
        //     if (actualGame === null) {
        //         actualGame = new Game();
        //         message.channel.send(actualGame.mapText)
        //     } else {
        //         console.log("déjé créé")
        //     }
        // } else if (args.length === 1) {
        //     actualGame.move(args[0])
        //     actualGame.update()
        //     message.channel.bulkDelete(2, true)
        //         .then(() => {
        //             message.channel.send(actualGame.mapText)
        //         })
        //         .catch(err => {});

        // }

    },
};