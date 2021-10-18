import DiscordJS, { Intents } from 'discord.js'

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Bot On')
})

client.on('messageCreate', (message) =>{
    if (message.content === 'ping'){
        message.reply({
            content: 'Calculating...',
            allowedMentions:{repliedUser:false}
        }).then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit({
                content: '' +ping,
            })
        })
    }
})

client.login('ODg1Mjc5Mzc0NzA0Nzg3NDU2.YTkuqg.Li6_WIDmAmU8R5_kiTOn_jGENTg')