const { Picsum } = require('picsum-photos')
module.exports = {
    name: 'photo',
    aliases: ['picture', 'image', "woacbo"],
    description: "Pour faire rever, ou des fonds d'ecrab",
    async execute(client, api, config, message, args) {
        const image = await Picsum.random()
        message.delete()
        message.channel.send(image.url)
    },
};