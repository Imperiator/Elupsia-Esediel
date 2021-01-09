const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let abbr = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\abbr>',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/abbr')
        .setDescription('L\'élément \`<\abbr>\` représente une abréviation ou un acronyme et permet, de façon optionnelle, d\'en fournir une description complète. S\'il est présent, l\'attribut title doit contenir cette même description complète et rien d\'autre.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`title \``},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(abbr)
}
module.exports.config = {
    name: 'abbr'
}