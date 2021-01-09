const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./secret/config.json")
const fs = require('fs');



bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if (jsfile.length <= 0) {
        console.log('[HANDLER]: Aucune commande trouvé')
    }

    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`[HANDLER]: ${f} ok !`)
        bot.commands.set(props.config.name, props)
    })
})




bot.on("ready", async () => {

    console.log(`(${bot.user.username}): Online`)

    let statues = [
        `Le Repaire`,
        `Developpement Web`,
    ]

    setInterval(function () {
        let status = statues[Math.floor(Math.random() * statues.length)]
        bot.user.setActivity(status, {type: "WATCHING"})
    }, 5000)
})





bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commandFile = bot.commands.get(command.slice(prefix.length))
    if (commandFile) commandFile.run(bot, message, args)

    if (!message.content.startsWith(prefix)) return;
    let arg = message.content
        .slice(typeof prefix === "string" ? prefix.length : 0)
        .trim()
        .split(/ +/g);

})




bot.login(config.token)