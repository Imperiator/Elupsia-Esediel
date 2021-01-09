const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let b = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<b> : l\'élément portant à l\'attention',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/b')
        .setDescription('L\'élément \`<b>\` permet d\'attirer l\'attention du lecteur sur le contenu d\'un élément sans que ce contenu revêt une importance particulière. Anciennement utilisé pour mettre le texte en gras. Cet élément ne doit pas être utilisé pour mettre en forme des éléments, c\'est la propriété CSS font-weight qu\'il faut utiliser. Si l\'élément est d\'une importance particulière, on utilisera l\'élément HTML \`<strong>\`.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Notes d\'utilisation:**',
                value: `> • \`<b>\` est habituellement utilisé pour les mots-clés dans les résumés, les noms de produits dans des tests (sans que ceux-ci aient une importance particulière). Il peut également être utilisé afin d'indiquer la première phrase de chaque paragraphe d'un article.\n
                        > • Il ne faut pas confondre l'élément \`<b>\` avec les éléments \`<\strong>\`, \`<\em>\`, ou \`<\mark>\`. L'élément \`<\strong>\` réprésente un texte d'une certaine importance,\`<\em>\` met une emphase sur le texte et \`<\mark>\` réprésente un texte avec une certaine pertinence. L'élément <\b> ne porte aucune information sémantique particulière ; utilisez-le lorsque qu'aucun autre ne convient.\n 
                        > • De la même façon, ne balisez pas les titres en utilisant l'élément \`<b>\`. Pour cet usage, utilisez les balises \`<\h1>\` à \`<\h6>\`. De plus, les feuilles de style peuvent changer le style par défaut de ces éléments. Ils ne seront pas forcément affichés en gras.`}
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(b)
}
module.exports.config = {
    name: 'b'
}