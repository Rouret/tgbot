const fetch = require("node-fetch");
module.exports = {
    name: 'coronavirus',
    aliases: ['corona', 'virus'],
    description: 'Pour te faire regretter tes pâtes',
    execute(client, api, config, message, args) {
        message.delete()
        fetch("https://coronavirusapi-france.now.sh/FranceLiveGlobalData", {})
            .then((response) => response.json())
            .then((data) => {
                console.log(data.FranceGlobalLiveData[0])
                APIdata = data.FranceGlobalLiveData[0]
                reanimation = APIdata.reanimation === undefined ? "Inconnu" : APIdata.reanimation
                nouvelle_reanimation = APIdata.nouvellesReanimations === undefined ? "" : `( +${APIdata.nouvellesReanimations})`

                message.channel.send({
                    embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL()
                        },
                        title: "Information Coronavirus du " + APIdata.date,
                        fields: [{
                                name: "Mort total",
                                value: APIdata.deces === undefined ? "Inconnu" : APIdata.deces
                            },
                            {
                                name: "Reanimation:",
                                value: `${reanimation} ${nouvelle_reanimation}`

                            },
                            {
                                name: "Cas Confirmé:",
                                value: APIdata.casConfirmes === undefined ? "Inconnu" : APIdata.casConfirmes
                            },
                        ],
                        timestamp: new Date(),
                        footer: {
                            icon_url: client.user.avatarURL(),
                            text: "TG bot"
                        }
                    }
                });
            });
    },
};