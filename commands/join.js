const ytdl = require('ytdl-core');
const fs = require('fs');
module.exports = {
    name: 'join',
    aliases: ['j'],
    description: 'oups',
    async execute(client, api, config, message, args) {
        message.delete()
        const connection = await message.member.voice.channel.join();
        if (message.member.voice.channel) {
            const dispatcher = connection.play(fs.createReadStream('./sounds/alak.mp3'));
            dispatcher.setVolume(1);
            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    },
};