const lib = require("./src/utils.js");
const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const api_key = require("./token");
const listCommands = [
    "!`tg` @mention",
    "!`ping` @mention message",
    "!`joke`",
    "!`info`",
];

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
];
const API_KEY_JOKE =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjU5ODE3MzI4NDU4MzM0MjExIiwibGltaXQiOjEwMCwia2V5IjoiT0cxbFJ6U05SWTVIOVNGWnN6NWJkQ2Z0OUU3QVphbVFMZHc5cG5NQ0xpUUNzVmhOanEiLCJjcmVhdGVkX2F0IjoiMjAyMC0xMC0yMlQxOTo0NTozMSswMjowMCIsImlhdCI6MTYwMzM4ODczMX0.HplPyggkIIFOTgnisivNaf75825jQv7O2063Msa_0c0";
const phraseList = [
    "tg",
    "TG",
    "Ferme la",
    "STP tg",
    "MAIS FERME LA",
    "Allez tg",
];
const trooooll = [
    "salope va !",
    "mon petit",
    "cries mon nom",
    "oui",
    "tg stp",
    "Allo oui ?",
];

const regex = /(21)/g;

client.on("ready", () => {
    client.user.setActivity("!help");
    console.log(`I'm on fire`);
});
client.on("message", (msg) => {
    message_content = lib.parseContent(msg.content);
    const TG = new tg();
    if (
        message_content.exec == "!" &&
        message_content.command == "tg" &&
        message_content.args.length == 1
    ) TG.tg(msg);
    else if (message_content.exec == "!" && message_content.command == "info") TG.info(msg);
    else if (
        message_content.exec == "!" &&
        message_content.command == "ping" &&
        message_content.args.length > 1
    ) TG.ping(msg, message_content);
    else if (message_content.exec == "!" && message_content.command == "joke") TG.joke(msg);
    else if (msg.content.match(regex)) TG.triso(msg);
    else if (message_content.exec == "!" && message_content.command == "help") TG.help(msg);
    else if (message_content.exec == "!" && message_content.command == "test") TG.test(msg);
    TG.event_message();
});

class tg {
    tg(msg) {
        msg.delete();
        msg.channel.send(
            phraseList[lib.getRandom(0, phraseList.length - 1)] +
            " " +
            message_content.args[0]
        );
        msg.channel.send(memeList[lib.getRandom(0, memeList.length - 1)]);
    }
    info(msg) {
        msg.delete();
        msg.channel.send("Idée de <@!259817328458334211>, bot codé en 15 minutes");
    }
    ping(msg, message_content) {
        msg.delete();
        let person = msg.mentions.users.first().id;
        message_content.args[0] = "";
        client.users.cache
            .get(person)
            .send(message_content.args.join().replace(/,/g, " "));
        msg.channel.send(
            "Ouallala un message privée a été envoyé," +
            trooooll[lib.getRandom(0, trooooll.length - 1)]
        );
    }
    joke(msg) {
        msg.delete();
        fetch("https://www.blagues-api.fr/api/random", {
                headers: {
                    Authorization: `Bearer ${API_KEY_JOKE}`,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                msg.channel.send(data.joke);
                setTimeout(function() {
                    msg.channel.send(data.answer);
                }, 5000);
            });
    }
    triso(msg) {
        msg.channel.send("https://tenor.com/bmYc4.gif");
    }
    help(msg) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor("orange")
            .setTitle("Besoin d'aide la ziz ?")
            .setURL("https://pornhub.com/")
            .setAuthor(
                "Tg bot",
                "https://sayingimages.com/wp-content/uploads/i-needs-help-help-meme.jpg",
                ""
            )
            .setThumbnail(
                "https://sayingimages.com/wp-content/uploads/i-needs-help-help-meme.jpg"
            )
            .addFields({
                name: "Voila pour toi bb",
                value: listCommands.join("\n").replace(/g,/),
            });
        msg.channel.send(exampleEmbed);
    }
    event_message(msg) {
        if (lib.getRandom(0, 100) == 21) {
            msg.delete();
            msg.channel.send(phraseList[lib.getRandom(0, phraseList.length - 1)]);
            msg.channel.send(memeList[lib.getRandom(0, memeList.length - 1)]);
        }
    }
}

client.login(api_key);