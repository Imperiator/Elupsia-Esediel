const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let canvas = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\canvas> : l\'élément de canevas graphique',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/canvas')
        .setDescription('L\'élément \`<\canvas>\` permet de modifier une zone graphique via un script (habituellement en JavaScript ou grâce à WebGL). Il peut par exemple être utilisé afin de dessiner des graphiques, manipuler des images ou jouer des animations.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`height\` \`moz-opaque\` \`width\``},

            { name: '**Notes d\'utilisation:**',
                value: `> • Il est fortement recommandé de fournir un contenu alternatif au contenu du bloc \`<\canvas>\`. Ce contenu pourra être utilisé par les navigateurs plus anciens qui ne supportent pas l'élément \`<\canvas>\` et ceux pour lesquels JavaScript est désactivé. \n
                        > • À la différence de \`<\img>\`, l'élément \`<\canvas>\` doit être fermé avec la balise fermante \`<\canvas>\`.`},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(canvas)
}
module.exports.config = {
    name: 'canvas'
}