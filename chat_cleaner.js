const Discord = require('discord.js');

const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!!!`);

});

client.on('messageCreate', async (msg) => {
    if (msg.content == "!cls") {
        let fetched;
        let toDelete = [];
        console.log("Command issued: " + msg.content)
        do {
            fetched = await msg.channel.messages.fetch({ limit: 100 });
            fetched.forEach(message => {
                if(!message.pinned){
                    toDelete.push(message)
                }
            });
            await msg.channel.bulkDelete(toDelete)

        } while (fetched.size >= 0);


    }
});

// client.login(process.env.token);
client.login("OTk4MjMzNDY1ODE4NDY4NDEy.Gu7_Cf.O40syDdfwQ6ojM58DgNHwZXm9Ufh0qKgfecw4c");

