const Discord = require('discord.js');

const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let isEnabled = false

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!!!`);

});

client.on('messageCreate', async (msg) => {
    if(msg.content == "cc!toggle"){
        isEnabled = !isEnabledl
    }
    if (msg.content == "cc!clear" && isEnabled) {
        let fetched;
        let toDelete ;
        console.log("Command issued: " + msg.content)
        do {
            toDelete = [];
            fetched = await msg.channel.messages.fetch({ limit: 100 });
            fetched.forEach(message => {
                if (!message.pinned) {
                    toDelete.push(message)
                }
            });
            await msg.channel.bulkDelete(toDelete)

        } while (fetched.size >= 0);


    }
});

client.login(process.env.token);

