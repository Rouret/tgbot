const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
    name: 'hhelp',
    description: 'List all of my commands or info about a specific command',
    aliases: ['h'],
    usage: '[command name]',
    cooldown: 5,
    execute(client, api, config, message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor("orange")
                .setTitle("Besoin d'aide la ziz ? fait `!help COMMANDE`")
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
                    value: commands.map(command => command.name).join('\n'),
                });

            return message.channel.send(exampleEmbed)
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Quoi ?');
        }

        data.push(`**Commande:** !${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.usage}`);

        message.channel.send(data, { split: true });
    },
};