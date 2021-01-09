const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {

    message.delete()

    let adress = new Discord.MessageEmbed()
        .setColor('2f3136')
        .setAuthor('<\address> : l\'élément d\'adresse de contact',
            'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png', 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/address')
        .setDescription('L\'élément HTML \`<\address>\` indique des informations de contact pour une personne, un groupe de personnes ou une organisation.')
        .setThumbnail(message.guild.iconURL({dynamic: true, size: 512}))
        .addFields(

            { name: '**Notes d\'utilisation:**',
                value: `> • Pour représenter une adresse arbitraire, qui n'est pas relative à l'information de contact, on utilisera l'élément \`<\p>\` plutôt que l'élément \`<\address>\`. \n
                        > • Cet élément ne doit pas contenir plus d'informations que l'information de contact, par exemple une date de publication (qui appartiendrait à l'élément \`<time>\`). \n 
                        > • Typiquement un élément \`<address>\` peut être placé dans l'élément  \`<footer>\` de la section courante, s'il y en a une.`},
        )
        .setTimestamp()
        .setFooter('Elupsia Helping', 'https://developer.cdn.mozilla.net/static/img/opengraph-logo.72382e605ce3.png');

    message.channel.send(adress)
}
module.exports.config = {
    name: 'adress'
}