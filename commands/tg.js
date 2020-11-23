const lib = require("../utils.js");
module.exports = {
    name: 'tg',
    aliases: ['chut', 'arretelaaaheuu'],
    description: 'Ferme la',
    theme: "fun",
    execute(client, api, config, message, args) {

        const memeList = [
            "https://tenor.com/bidgs.gif",
            "https://tenor.com/be7NY.gif",
            "https://tenor.com/3Lul.gif",
            "https://tenor.com/ZE5b.gif",
            "https://tenor.com/Ai7Y.gif",
            "https://tenor.com/bghWl.gif",
            "https://tenor.com/boYtg.gif",
            "https://tenor.com/8a4K.gif",
            "https://tenor.com/vhPp.gif",
            "https://tenor.com/bjLL2.gif",
            "https://tenor.com/oY3a.gif",
            "https://tenor.com/pcXA.gif",
            "https://www.youtube.com/watch?v=cbOEJNMOKdc"
        ];

        const phraseList = [
            "tg",
            "TG",
            "Ferme la",
            "STP tg",
            "MAIS FERME LA",
            "Allez tg",
        ];
        if (args.length > 1) {
            return message.channel.send("Tu veux ping toute ta famille aussi ? non mais")
        }
        if (message.mentions.members.first()) {
            if (message.mentions.members.first().id == "706069097548480553") {
                message.channel.send("T sérieux ? Je dis et fait ce que je veux");
                var i = 0,
                    s = ["Tu", "as", "compris", "?"];
                for (let i = 0; i < s.length; i++) {
                    setTimeout(() => {
                        message.channel.send(s[i])
                    }, 1000)
                }
                return
            }
            message.delete()
            message.channel.send(
                phraseList[lib.getRandom(0, phraseList.length - 1)] +
                " " +
                args[0]
            );
            message.channel.send(memeList[lib.getRandom(0, memeList.length - 1)]);
        } else {
            message.channel.send("Alors toi t'es vraiment con, mentionne moi qui je dois dire tg pf ... ")
        }

    },
};