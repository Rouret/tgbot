// require the discord.js module
const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const api = ""
    // create a new discord client
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
const commandFlies = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const DEV_MODE = true;
const PREFIX = DEV_MODE ? config.prefix_dev : config.prefix
    //prefix_dev
for (const file of commandFlies) {
    //Store dans client.commands l'ensemble des commane 
    // name + info
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log("I'm on fire!");
});


// client.on('raw', async event => {
//     //Toute les actions
// });

client.on('message', message => {
    if (message.mentions.members.array().length == 0) {
        if (message.content.match(/(21)/g)) {
            message.react("2️⃣")
            message.react("1️⃣")
            message.channel.send("https://tenor.com/bmYc4.gif");
        }
    }
    if (message.content[0] != PREFIX) return;
    //Définit les arguments
    const args = message.content.slice(PREFIX.length).split(/ +/);
    //Get le nom de la commande
    const commandName = args.shift().toLowerCase();
    //Va chercher les info de la commande
    const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    //si la commande a besoin d'etre admin, il faut le role Admin
    if (command.admin && !message.member.roles.cache.find(r => r.name == "Admin")) return
    if (command.args && !args.length) {
        return;
    }
    if (command.guildOnly && message.channel.type !== 'text') return;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (!timestamps.has(message.author.id)) {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    } else {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply("Woa arrete de spam la ziz, tu pourras dans " + timeLeft);
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }
    try {
        command.execute(client, api, config, message, args);
    } catch (error) {
        console.error(error);
        message.channel.send('WOAOAOAOOAAOOAOAAO NOOOONNN une erreur <@259817328458334211> aide moi ');
    }

});

client.login(config.token);