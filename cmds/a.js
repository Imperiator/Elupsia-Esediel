const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let a = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\a> : l\'élément d\'ancre',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/a')
        .setDescription('L\'élément \`<\a>\` (pour ancre ou anchor en anglais) définit un hyperlien vers un autre endroit de la même page ou vers une autre page sur le Web.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`download\` \`href\` \`hreflang\` \`ping\` \`referrerpolicy\` \`rel\` \`target\` \`type\` `},
)
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(a)
}
module.exports.config = {
    name: 'a'
}