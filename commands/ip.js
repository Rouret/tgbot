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
    name: 'ipp',
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
        } else if (args.length === 1 && args[0] === "info") {
            var resul1, result2;
            pgClient
                .query(total)
                .then(res => resul1 = res.rows[0].total)
            setTimeout(() => {
                pgClient
                    .query(total)
                    .then(res => {
                        const TOTAL_IP = 4294967296
                        response.description = "Actuellement un vitesse de:"
                            // + " @ip/s"
                        current = parseInt(res.rows[0].total)
                        seconde = current - resul1
                        minute = seconde * 60
                        hours = minute * 60
                        day = hours * 24

                        response.speed =
                            "*@IP/s:*  `" + seconde + "`\n" +
                            "*@IP/m:* `" + minute + "`\n" +
                            "*@IP/h:* `" + hours + "`\n" +
                            "*@IP/d:* `" + day + "`"

                        predict_tomo = current + day
                        predict_week = current + day * 7

                        response.predict =
                            "*Demain:*`" + predict_tomo + "`\n" +
                            "*Semaine prochaine*`" + predict_week + "`"
                        end_day = ((TOTAL_IP - current) / day).toFixed(2)
                        if (end_day > (365 * 2)) response.end = (end_day / 365).toFixed(2) + " years"
                        else response.end = end_day + " days"
                        response.total = ((current / TOTAL_IP) * 100).toFixed(5) + " %"
                        message.channel.send({
                            embed: {
                                color: 3447003,
                                author: {
                                    name: client.user.username,
                                    icon_url: client.user.avatarURL()
                                },
                                title: "Information",
                                fields: [{
                                        name: "Vitesse",
                                        value: response.speed
                                    },
                                    {
                                        name: "Prévision",
                                        value: response.predict
                                    },
                                    {
                                        name: "% des @ip disponibles sur internet",
                                        value: response.total
                                    },
                                    {
                                        name: "Fin dans:",
                                        value: response.end
                                    }
                                ],
                                timestamp: new Date(),
                                footer: {
                                    icon_url: client.user.avatarURL(),
                                    text: "TG bot"
                                }
                            }
                        });
                    })
            }, 1000)
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