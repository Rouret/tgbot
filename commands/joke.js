const fetch = require("node-fetch");
module.exports = {
    name: 'joke',
    aliases: ['blague', 'basyfaitmoirire'],
    description: 'Rigole putain',
    theme: "fun",
    execute(client, api, config, message, args) {
        message.delete()
        fetch("https://www.blagues-api.fr/api/random", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjU5ODE3MzI4NDU4MzM0MjExIiwibGltaXQiOjEwMCwia2V5IjoiT0cxbFJ6U05SWTVIOVNGWnN6NWJkQ2Z0OUU3QVphbVFMZHc5cG5NQ0xpUUNzVmhOanEiLCJjcmVhdGVkX2F0IjoiMjAyMC0xMC0yMlQxOTo0NTozMSswMjowMCIsImlhdCI6MTYwMzM4ODczMX0.HplPyggkIIFOTgnisivNaf75825jQv7O2063Msa_0c0`,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                message.channel.send(data.joke);
                setTimeout(function() {
                    message.channel.send(data.answer);
                }, 5000);
            });
    },
};