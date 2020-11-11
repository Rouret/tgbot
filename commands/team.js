function random() {
    min = Math.ceil(0);
    max = Math.floor(participants.length - 1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createTeam(nbTeam, nbPerson) {
    for (let k = 0; k < nbTeam; k++) {
        teams.push(run(participants, nbPerson))
    }
}

function run(data, n) {
    var temp = []
    for (let i = 0; i < n; i++) {
        let index
        let value
        while (value === undefined) {
            index = random()
            value = data[index]
        }
        temp.push(data[index])
        delete data[index]
    }
    return temp
}
var TEAMS_NAME = []
var participants = []
var teams = []
module.exports = {
    name: 'team',
    aliases: ['lol'],
    description: "```!team (Nombre d'équipes) (Nombre de personnes par équipe) Participant1 Participant2 ... ```",
    theme: "other",
    execute(client, api, config, message, args) {
        if (args.length <= 4) {
            message.channel.send("La syntaxe est :" + this.description)
            return
        }
        // message.delete()
        //VARIABLES
        const nbTeam = args[0]
        const nbPerson = args[1]
        var names;
        teams = []
        TEAMS_NAME = ["Boomer", "Skype", "HubPorn", "PHP", "Chocolatine", "Mousquetaires", "Brothers", "Brazzers", "Covid-19", "Malphite", "WinRAR"]
        var needNames = nbTeam <= TEAMS_NAME.length
        participants = args.splice(2)

        //VERIF
        if (nbTeam * nbPerson > participants.length) {
            message.channel.send(`Heu alors petit cours connard: ${nbTeam} x ${nbPerson} < ${participants.length} donc c'est impossible boomer`)
            return
        } else if (nbTeam * nbPerson < participants.length) {
            message.channel.send(`Heu alors petit cours connard: ${nbTeam} x ${nbPerson} > ${participants.length} donc c'est impossible boomer`)
            return
        }
        //CREATION DEQUIPE
        createTeam(nbTeam, nbPerson)
            //AFFICHAGE
        var rendu = []

        if (needNames) teams_names = run(TEAMS_NAME, nbTeam)

        for (let index = 0; index < teams.length; index++) {
            rendu.push({ name: "Equipe " + (needNames ? teams_names[index] : index + 1), value: teams[index].join(", ") })
        }
        //MESSAGE
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL()
                },
                title: "Les équipes",
                fields: rendu,
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: "TG bot"
                }
            }
        });
    },
};