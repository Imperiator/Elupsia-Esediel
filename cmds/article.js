const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let article = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\address> : l\'élément d\'adresse de contact',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/article')
        .setDescription('L\'élément HTML \`<\article>\` représente du contenu autonome dans un document, une page, une application, ou un site. Ceci peut être un message sur un ' +
            'forum, un article de journal ou de magazine, une parution sur un blog, un commentaire d\'utilisateur, un widget ou gadget interactif, ' +
            'ou tout autre élément de contenu indépendant. Ce contenu est prévu pour être distribué ou réutilisé indépendamment (par exemple dans un flux de syndication).')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Notes**',
                value: `> • Chaque \`<\article>\` autonome, qui n'est pas imbriqué dans un autre élément \`<\article>\`, devrait être identifié typiquement, en incluant un élément d'en-tête \`<\header>\` qui comprendrait lui-même un élément de titre \`<\h1>\` à \`<\h6>\`. \n
                        > • Quand un élément \`<article>\` est imbriqué dans un autre, l'élément contenu représente un article relatif à l'élément contenant. Par exemple, les commentaires d'une parution de blog peuvent être un élément \`<article>\` inclus dans l'\`<article>\` représentant la parution en elle-même. \n 
                        > • Des informations à propos de l'auteur d'un élément \`<article>\` peuvent être fournies au travers de l'élément \`<address>\`, mais cela ne s'applique pas aux éléments \`<article>\` imbriqués.\n
                        > • La date et l'heure de publication d'un élément \`<article>\` peuvent être donnés en utilisant l'attribut datetime d'un élément \`<time>\`. *Notez que l'attribut pubdate de* \`<time>\` *ne fait plus partie de la norme W3C HTML 5*.`},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(article)
}
module.exports.config = {
    name: 'article'
}