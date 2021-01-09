const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let bdo = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<bdo> : l\'élément de surcharge bidirectionnelle',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/bdo')
        .setDescription('L\'élément HTML \`<bdo>\` (pour bidirectional override ou « surcharge bidirectionnelle ») est utilisé afin d\'outrepasser la direction du texte. Cela permet d\'imposer une direction donnée à un texte. L\'orientation du texte est inversée mais pas celle des caractères.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))

        .addFields(

            { name: '**Attributs :**',
                value: `\`dir\``},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(bdo)
}
module.exports.config = {
    name: 'bdo'
}