const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let area = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\area>',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/area')
        .setDescription('L\'élément HTML \`<\area>\` définit une zone particulière d\'une image et peut lui associer un lien hypertexte. Cet élément n\'est utilisé qu\'au sein d\'un élément \`<map>\`.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`alt\` \`coords\` \`href\` \`hreflang \` \`ping \` \`referrerpolicy\` \`rel \` \`shape\` \`target\` `},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(area)
}
module.exports.config = {
    name: 'area'
}