const {Client, GatewayIntentBits} = require("discord.js")
require("dotenv").config();

const loginId = process.env.LOGINID;



const client = new Client({
    intents : [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent]
})

client.on('messageCreate', (message) =>{
    console.log(message.content)
})
client.on('messageCreate', (message) =>{
    if(message.author.bot) return;
    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1];
        return message.reply({
            content : 'Generating Short Id For ' + url,
        })
    }
    message.reply({
        content : "HI from dinesh"
    })
})

client.on('interactionCreate', interaction => {
    interaction.reply('Pong ji....!!')
} )

client.login(
    loginId
)
