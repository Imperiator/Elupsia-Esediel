const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let caption = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\caption> : l\'élément de légende d\'un tableau',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/caption')
        .setDescription('L\'élément \`<\canvas>\` permet de modifier une zone graphique via un script (habituellement en JavaScript ou grâce à WebGL). Il peut par exemple être utilisé afin de dessiner des graphiques, manipuler des images ou jouer des animations.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Notes d\'utilisation:**',
                value: `> • Quand l'élément \`<table>\` (étant le parent de l'élément \`<caption>\`) n'est que l'unique descendant d'un élément \`<figure>\`,c'est l'élément \`<figcaption>\` doit être utilisé.`},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(caption)
}
module.exports.config = {
    name: 'caption'
}