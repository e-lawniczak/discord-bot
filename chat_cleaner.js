const Discord = require('discord.js');

const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let isEnabled = false

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!!!!`);
});

client.on('messageCreate', async (msg) => {
    let out;
    if (msg.content == "!toggle") {
        isEnabled = !isEnabled;
        let txt = isEnabled ? "off" : "on";
        out = await msg.channel.send(`Safety switch is ${txt}`)
        setTimeout(() => {
            out.delete()
        }, 2000)

    }
    if (msg.content == "!cls") {
        let fetched;
        let toDelete;
        console.log("Command issued: " + msg.content)
        if (isEnabled) {
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

            isEnabled = false
        } else {
            out = await msg.channel.send(`Turn off safety switch first using !toggle`);
            setTimeout(() => {
                out.delete()
            }, 2000)
        }
    }
});

client.login(process.env.token);

