module.exports = {
    name: 'avatar',
    aliases: ['icon', 'logo'],
    description: 'Te donnes ta pp mon chou',
    theme: "user",
    execute(client, api, config, message, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(`${message.author.displayAvatarURL()}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `L'avatar de ${user.username}, le suceur de lapin: ${user.displayAvatarURL()}`;
        });
        return message.channel.send(avatarList);
    },
};