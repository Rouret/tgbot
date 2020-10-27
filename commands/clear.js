module.exports = {
    name: 'c',
    description: 'deleted specified number of messages',
    execute(client, api, config, message, args) {
        var amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            amount = 100
        } else if (amount < 1 || amount > 99) {
            amount = 100
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.log(err);
            message.channel.send("Wola deso je peux la j'ai poney");
        });
    },
};