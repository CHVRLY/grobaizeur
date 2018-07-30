const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const config = require('./config.json');
const PREFIX = "!gb";

// mauvais salon 

clientDiscord.on('message', message => {
    if(message.content.startsWith(PREFIX)) {
        if (message.channel.id != '462666329711837185') {
            const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor(' ', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**> Oops...** Je ne peut pas envoyer ça ici !

**> Mes commandes sont uniquement disponibles dans les salons NSFW afin de ne pas heurter la sensibilité des plus jeunes.**

`)
            
            message.channel.send({embed});
        }
    }
});

clientDiscord.login(process.env.TOKEN);
