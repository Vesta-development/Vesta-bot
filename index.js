const { Client, GatewayIntentBits, IntentsBitField, Partials, Collection } = require("discord.js")
const { Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent } = Partials
require("dotenv").config()


const client = new Client({
    intents: 131071,
    partials: [Channel, GuildMember, Message, Reaction, ThreadMember, User, GuildScheduledEvent]
})

client.commands = new Collection()

client.login(process.env.token).then(async (b) => {
    require("./handlers/commands").commands(client)
})