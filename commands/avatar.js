module.exports = {
    name: 'avatar',
    aliases: ['icon', 'logo'],
    description: 'Te donnes ta pp mon chou',
    execute(client, api, config, message, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(`${message.author.displayAvatarURL}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL}`;
        });

        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    },
};

// 509329395949764609