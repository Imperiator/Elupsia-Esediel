const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let br = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<br> : l\'élément de saut de ligne',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/br')
        .setDescription('L\'élément HTML \`<br>\` crée un saut de ligne (un retour chariot) dans le texte. Il s\'avère utile lorsque les sauts de ligne ont une importance (par exemple lorsqu\'on écrit une adresse ou un poème).')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(br)
}
module.exports.config = {
    name: 'br'
}