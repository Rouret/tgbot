const gifs_moins = [
    "https://tenor.com/view/karma-dog-kick-fall-gif-4929124",
    "https://tenor.com/view/karma-kick-fall-gif-12093333",
    "https://tenor.com/view/insect33-gato-revancha-cat-instant-karma-gif-15667507",
    "https://tenor.com/view/kick-ball-instant-karma-gif-8448192",
    "https://tenor.com/view/shower-sexy-fail-gif-5822782",
    "https://tenor.com/view/prank-chair-karma-gif-5494737",
    "https://tenor.com/view/instant-karma-angry-baby-cat-gif-11801930",
    "https://tenor.com/view/party-blower-instant-karma-gif-7743829",
    ""
]
const gifs_plus = [
    "https://tenor.com/view/slide-baez-javy-baseball-gif-14102618",
    "https://tenor.com/view/full-house-olsen-sassy-ootd-gif-4665989",
    "https://tenor.com/view/driving-drivingtrick-cutekid-kiddriver-toddler-gif-5358724",
    "https://tenor.com/view/like-a-boss-jumping-rope-horse-gif-12849458",
    "https://tenor.com/view/kid-90s-rattail-cool-sunglasses-gif-4110985",
    "https://tenor.com/view/calm-yo-tits-calm-down-calm-relax-terry-crews-gif-4655399",
    "https://tenor.com/view/arnold-arnold-schwarzenegger-boner-muscles-flex-gif-4819009",
    "https://tenor.com/view/pole-dance-pole-dancing-girl-gif-11085064"
]
const utils = require('../utils.js')
module.exports = {
    name: 'karma',
    aliases: ['k'],
    description: 'karma is a bitch',
    theme: "fun",
    execute(client, api, config, message, args) {
        if (args.length === 0) return
        if (args[0] === "-") {
            message.channel.send(gifs_moins[utils.getRandom(0, gifs_moins.length - 1)]);
        } else if (args[0] === "+") {
            message.channel.send(gifs_plus[utils.getRandom(0, gifs_plus.length - 1)]);
        }
    },
};