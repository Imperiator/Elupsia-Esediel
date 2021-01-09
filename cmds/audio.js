const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let audio = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\audio> : l\'élément audio embarqué',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/audio')
        .setDescription('L\'élément HTML \`<\audio>\` est utilisé afin d\'intégrer un contenu sonore dans un document. Il peut contenir une ou plusieurs sources audio représentées avec l\'attribut src ou l\'élément <source>. S\'il y a plusieurs sources, l\'agent utilisateur choisira celle qui convient le mieux.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`autoplay\` \`controls\` \`crossorigin\` \`loop\` \`muted\` \`preload\` \`src\``},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(audio)
}
module.exports.config = {
    name: 'audio'
}