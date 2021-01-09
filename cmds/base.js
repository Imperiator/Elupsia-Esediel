const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let base = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<base> : l\'élément pour l\'URL de base du document',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/base')
        .setDescription('L\'élément <base> définit l\'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans un document. Il ne peut y avoir qu\'un seul élément <base> au sein d\'un document.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`href\` \`target\``},

            { name: '**Notes d\'utilisation:**',
                value: `> • Si plusieurs éléments <\base> sont utilisés, seules les premières valeurs pour href et target sont utilisées, les autres valeurs sont ignorées.\n
                        > • Les ancres d'une page (<\a>), par exemple <\a href="#ancre">ancre</a>, sont résolues avec l'URL de base fournie via <base> et déclenche une requête HTTP vers l'URL de base.Ainsi, avec un document qui contient <base href="http://www.example.com/"> et plus loin <a href="#ancre">Ancre</a>, le lien fourni par l'ancre pointera vers http://www.example.com/#ancre.                                                                                                                                                   `},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(base)
}
module.exports.config = {
    name: 'base'
}