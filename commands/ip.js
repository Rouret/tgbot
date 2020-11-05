const { Client } = require('pg');
const Discord = require('discord.js');
const pgClient = new Client({
    user: 'postgres',
    host: '192.168.1.60',
    database: 'internet',
    password: 'root',
    port: 5432,
});
pgClient.connect();
const total = `SELECT count(*) as total FROM data`;

module.exports = {
    name: 'ip',
    aliases: ['int', 'internet'],
    description: 'Te donnes l\'avance de la recolte des noms de domain',
    execute(client, api, config, message, args) {
        message.delete()
        const response = {
            description: "",
            result: ""
        }
        if (args.length === 0) {
            pgClient
                .query(total)
                .then(res => {
                    console.log(response)
                    response.description = "Nombre de noms de domaines découvert: "
                    response.result = res.rows[0].total
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor("orange")
                        .setAuthor(
                            "Tg bot",
                            "https://sayingimages.com/wp-content/uploads/i-needs-help-help-meme.jpg"
                        )
                        .addFields({
                            name: response.description,
                            value: response.result.length == 0 ? "Aucun résultat" : response.result,
                        });
                    return message.channel.send(exampleEmbed);
                })
                .catch(e => console.error(e.stack))
        } else if (args.length === 1) {
            const search = `SELECT name FROM data WHERE name LIKE '%${args[0]}%' LIMIT 10`;
            pgClient.query(search, (err, res) => {
                if (err) return
                    // message.channel.send(res.rows.map(el => el.name).join("\n"))
                response.description = "Resultat de la recherche '" + args[0] + "':"
                response.result = res.rows.map(el => el.name).join("\n")
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor("orange")
                    .setAuthor(
                        "Tg bot",
                        "https://sayingimages.com/wp-content/uploads/i-needs-help-help-meme.jpg"
                    )
                    .addFields({
                        name: response.description,
                        value: response.result.length == 0 ? "Aucun résultat" : response.result,
                    });
                return message.channel.send(exampleEmbed);
            });
        }

    },
};