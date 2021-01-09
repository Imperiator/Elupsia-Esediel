const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let body = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<body> : l\'élément pour le corps du document',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/body')
        .setDescription('L\'élément \`<body>\` représente le contenu principal du document HTML. Il ne peut y avoir qu\'un élément \`<body>\` par document.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Attributs :**',
                value: `\`alink\` \`background\` \`bgcolor\` \`bottommargin\` \`leftmargin\` \`link\` \`onafterprint \` \`onbeforeprint \` \`onbeforeunload \` \`onblur \` \`onerror \` \`onfocus \` \`onhashchange \` \`onload \` \`onmessage \`\`rightmargin\`\`topmargin\`\`vlink\``},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(body)
}
module.exports.config = {
    name: 'body'
}