const { prefix } = require('../config.json');
const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command',
    aliases: ['h'],
    usage: '[command name]',
    cooldown: 5,
    execute(client, api, config, message, args) {
        const data = [];
        const { commands } = message.client;
        if (!args.length) {
            return message.channel.send({
                embed: {
                    color: "orange",
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL()
                    },
                    title: "Besoin d'aide la ziz ? fait `!help COMMANDE`",
                    fields: [{
                        name: "Voila pour toi bb",
                        value: commands.map(command => {
                            if (command.admin && !message.member.roles.cache.find(r => r.name == "Admin")) return false
                            return command.name
                        }).join('\n')
                    }],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL(),
                        text: "TG bot"
                    }
                }
            });
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