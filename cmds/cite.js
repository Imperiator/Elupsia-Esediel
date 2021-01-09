const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let cite = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\cite> : l\'élément de citation',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/cite')
        .setDescription('L\'élément HTML \`<\cite>\` contient le titre d\'une œuvre telle qu\'un livre, une chanson, un film, une sculpture… Cet élément doit inclure le titre de l\'œuvre. Cette référence peut-être abrégée en accord avec les conventions d\'usages pour l\'ajout des métadonnées de citations.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(cite)
}
module.exports.config = {
    name: 'cite'
}