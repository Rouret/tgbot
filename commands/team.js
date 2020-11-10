function random() {
    min = Math.ceil(0);
    max = Math.floor(participants.length - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createTeam() {
    var temp = []
    for (let i = 0; i < 2; i++) {
        let index
        let value
        while (value === undefined) {
            index = random()
            value = participants[index]
        }

        temp.push(participants[index])
        delete participants[index]
    }
    teams.push(temp)
}

var participants = []
var teams = []
module.exports = {
    name: 'team',
    aliases: ['lol'],
    description: 'Pour te faire regretter tes pâtes',
    execute(client, api, config, message, args) {
        message.delete()
        participants = ["Lucas", "Tom", "Baptiste", "Thibault"]
        teams = []
        createTeam()
        createTeam()
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: "Les équipe",
                fields: [{
                        name: "Equipe 1",
                        value: teams[0].join(" et ")
                    },
                    {
                        name: "Equipe 2",
                        value: teams[1].join(" et ")
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: "TG bot"
                }
            }
        });
    },
};