const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let data = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\data>',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/data')
        .setDescription('L\'élément HTML \`<\data>\` relie un contenu à une version de ce contenu interprétable par un ordinateur. Si le contenu possède une composante temporelle, l\'élément \`<time>\` doit être utiisé.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`value\``},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(data)
}
module.exports.config = {
    name: 'data'
}