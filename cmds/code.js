const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let code = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\code> : l\'élément de code en incise',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/code')
        .setDescription('L\'élément HTML \`<\code>\` représente un fragment de code machine. Par défaut, l\'agent utilisateur utilise une police à chasse fixe (monospace) afin d\'afficher le texte contenu dans cet élément.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(code)
}
module.exports.config = {
    name: 'code'
}