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
    "!`faim`",
    "!`music genre`",
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

const regex_21 = /(21)/g;
const regex_allo = /(allo)/g;
const regex_lol = /(lol)/g;
const regex_qui = /^qui*/g;

client.on("ready", () => {
    client.user.setActivity("!help");
    console.log(`I'm on fire`);
});
client.on("message", (msg) => {
    try {
        message_content = lib.parseContent(msg.content);
        const TG = new tg();
        if (message_content.exec == "!") {
            if (
                message_content.command == "tg" &&
                message_content.args.length == 1
            ) TG.tg(msg);
            else if (message_content.exec == "!" && message_content.command == "info") TG.info(msg);
            else if (
                message_content.command == "ping" &&
                message_content.args.length > 1
            ) TG.ping(msg, message_content);
            else if (message_content.command == "joke") TG.joke(msg);
            else if (message_content.command == "help") TG.help(msg);
            else if (message_content.command == "faim") TG.faim(msg);
            else if (message_content.command == "music" && message_content.args[0] == "genre") TG.musicGenre(msg);
            else if (message_content.command == "osu") TG.osu(msg);
            else if (message_content.command == "s") {
                msg.delete()
                msg.channel.send("Salope")

            } else if (message_content.command == "speak") {
                msg.delete()
                msg.channel.send(message_content.args.join().replace(/,/g, " "));
            }
        }
        if (msg.content.match(regex_21)) {
            TG.triso(msg)
        };
        if (msg.content.match(regex_allo)) {
            msg.channel.send("ferme la");
            setTimeout(function() {
                msg.channel.send("J'suis en game la");
            }, 2000);
        }
        if (msg.content.match(regex_lol)) msg.channel.send("Moi moi");
        if (msg.content.match(regex_qui)) msg.channel.send("Qui passe");
        TG.event_message(msg);
    } catch (err) {

    }
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
                    Authorization: `Bearer ${api_key.joke}`,
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
    faim(msg) {
        msg.delete()
        fetch("https://foodish-api.herokuapp.com/api", {})
            .then((response) => response.json())
            .then((data) => {
                msg.channel.send(data.image);
            });
    }
    musicGenre(msg) {

        msg.delete()
        fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/", {})
            .then((response) => response.text())
            .then((data) => {
                msg.channel.send("Voici un genre de music: " + data + "\n Voici ce que j'ai trouvé sur youtube:")
                this.youtube(msg, data)
            })

    }
    youtube(msg, word) {
        msg.delete()
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + word + "&type=video&key=" + api_key.youtube, {})
            .then((response) => response.json())
            .then((data) => {
                msg.channel.send("https://www.youtube.com/watch?v=" + data.items[0].id.videoId)
            })
    }
    osu(msg) {
        msg.channel.send("https://osu.ppy.sh/beatmapsets/" + lib.getRandom(2432570, 2581647))
    }
}
client.login(api_key.discord);