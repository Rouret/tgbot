const lib = require("../utils.js");
module.exports = {
    name: 'map',
    description: 'Position aléatoire',
    admin: true,
    theme: "other",
    execute(client, api, config, message, args) {
        message.delete()
        var long = lib.getRandomFloat(-90, 90);
        var lat = lib.getRandomFloat(-180, 180);
        message.channel.send(`Voici une position aléatoire: https://www.google.fr/maps/place/${long},${lat}`)
    },
};