const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let col = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\col>',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/col')
        .setDescription('L\'élément HTML \`<\col>\` définit une colonne appartenant à un tableau et est utilisé afin de définir la sémantique commune à toutes ses cellules. On trouve généralement cet élément au sein d\'un élément \`<\colgroup>\`.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(col)
}
module.exports.config = {
    name: 'col'
}