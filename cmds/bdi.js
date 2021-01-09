const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let bdi = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<bdi> : l\'élément d\'isolation bidirectionnelle',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/bdi')
        .setDescription('L\'élément \`<bdi>\` (ou élément d\'isolation de texte bidirectionnel) isole une portée (span) de texte pouvant être formatée dans une direction différente de celle du texte qui l\'entoure. Cela permet, par exemple, de présenter correctement une citation en arabe (écrit de droite à gauche) au sein d\'un texte écrit en français (écrit de gauche à droite)')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(bdi)
}
module.exports.config = {
    name: 'bdi'
}