const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let colgroup = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\colgroup>',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/colgroup')
        .setDescription('L\'élément HTML \`<\colgroup>\` définit un groupe de colonnes au sein d\'un tableau.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(colgroup)
}
module.exports.config = {
    name: 'colgroup'
}