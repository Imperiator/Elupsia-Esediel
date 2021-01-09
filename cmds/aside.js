const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let aside = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\aside> : l\'élément Aparté',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside')
        .setDescription('L\'élément HTML \`<\aside>\` (en anglais, "aparté") représente une partie d\'un document dont le contenu n\'a qu\'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d\'encadrés ou de boîtes de légende.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(aside)
}
module.exports.config = {
    name: 'aside'
}