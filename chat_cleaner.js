// https://discordapp.com/oauth2/authorize?&client_id=998233465818468412&scope=bot&permissions=292057888832
const Discord = require('discord.js');
// const auth = require("./auth.json");

const { Client, Intents} = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!!!`);

});

client.on('messageCreate', async (msg) => {
    if (msg.content == "!cls") {
        let m = await msg.channel.messages.fetch()
        m.forEach(item => {
            if (!item.pinned) {
                item.delete()
                    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
                    .catch(console.error);
            }

        })
    }
});

client.login(process.env.token);

