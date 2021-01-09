const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let button = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<button> : l\'élément représentant un bouton',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/button')
        .setDescription('L\'élément HTML \`<button>\` est utilisé afin de créer un contrôle interactif ayant la forme d\'un bouton et qui pourra être utilisé dans un formulaire ou dans le document.\n' +
            '\n' +
            'Par défaut, les boutons HTML sont mis en forme avec les styles natifs provenant du système d\'exploitation mais leur apparence peut être adaptée grâce à CSS.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`autofocus\` \`autocomplete\` \`disabled\` \`form \` \`formaction\` \`formenctype\` \`formnovalidate\` \`formtarget\` \`name\` \`type\` \`value\` `},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(button)
}
module.exports.config = {
    name: 'button'
}