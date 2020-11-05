const ytdl = require('ytdl-core');
const fs = require('fs');
module.exports = {
    name: 'join',
    aliases: ['j'],
    description: 'oups',
    async execute(client, api, config, message, args) {
        message.delete()
        console.log(args)
        const connection = await message.member.voice.channel.join();
        if (message.member.voice.channel && args.length === 1) {
            var songName = '';
            switch (args[0]) {
                case "projet":
                    songName = './sounds/projet.mp3'
                    break;
                case "alak":
                    songName = './sounds/alak.mp3'
                    break;
                case "tada":
                    songName = './sounds/tada.mp3'
                    break;
                case "bass":
                    songName = './sounds/bass.mp3'
                    break;
            }
            const dispatcher = connection.play(fs.createReadStream(songName));
            dispatcher.setVolume(0.5);
            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    },
};