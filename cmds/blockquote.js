const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let blockquote = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<blockquote> : l\'élément de bloc de citation',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/a')
        .setDescription('L\'élément \`<blockquote>\` (qui signifie bloc de citation) indique que le texte contenu dans l\'élément est une citation longue. Le texte est généralement affiché avec une indentation (voir les notes ci-après). Une URL indiquant la source de la citation peut être donnée grâce à l\'attribut cite tandis qu\'un texte représentant la source peut être donné via l\'élément \`<\cite>\`.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`cite\``},
            { name: '**Notes :**',
                value: `
                        > • Pour changer l'indentation de \`<blockquote>\`, on utilisera la propriété CSS margin-left ou margin-right (ou encore la propriété raccourcie margin)\n
                        > • Pour les citations courtes, on pourra utiliser l'élément \`<\q>\`.`},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(blockquote)
}
module.exports.config = {
    name: 'blockquote'
}