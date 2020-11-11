module.exports = {
    name: 'speak',
    aliases: ['s'],
    description: 'Tu reves de parler a ma place et ben tu peux juste la -> https://www.paypal.com/paypalme/rouretl',
    theme: "fun",
    execute(client, api, config, message, args) {
        message.delete()
        message.channel.send(args.join().replace(/,/g, " "));
    },
};