// INCLUDES
const Discord = require('discord.js');
const config = require('./scripts/config.json');
const scripts = require('./scripts/scripts.js');
require('events').EventEmitter.prototype._maxListeners = 1000;

// VARIABLES
const clientDiscord = new Discord.Client();
const PREFIX = "!gb";

// EVENEMENTS

clientDiscord.on('ready', () => {
    console.log("> initialisation du bot : OK!");
    clientDiscord.user.setActivity('!gb help');
});

// !gb help

clientDiscord.on('message', message => {
    if (message.channel.id === '462666329711837185') {
    if(message.content.startsWith(PREFIX + " help")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle(' ')
            .setAuthor('Grobaizeur', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**>** La liste des commande viens de t'étre envoyée en MP !

`)
            
            message.channel.send({embed});
            message.author.createDM().then(channel => {
                const embed = new Discord.RichEmbed();
                embed.setTitle('Voici la liste des commandes :')
                .setAuthor(' ', clientDiscord.user.avatarURL)
                .setColor(3447003)
                .setDescription(
`

**Grobaizeur** va devenir ton bot favori !

**Commandes Principales :**

**!gb ass** -> Des culs !
**!gb boobs** -> Des grosses mamelles !
**!gb hips** -> Des belles hanches !
**!gb sexy** -> Des photos sexy, sans plus !
**!gb fuck** -> L'un dans l'autre !
**!gb couple** -> Vive les amoureux !
**!gb pizza** -> Miam !

**Commandes Secondaires :**

**!gb heure** -> Affiche l'heure
**!gb info** -> Affiche les informations du bot

`)
                
                channel.send({embed});
            })
        }
    }
});

// !gb info

clientDiscord.on('message', message => {
    if (message.channel.id === '462666329711837185') {
    if(message.content.startsWith(PREFIX + " info")) {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Fiche technique:')
            .setAuthor('Informations de Grobaizeur', clientDiscord.user.avatarURL)
            .setColor(3447003)
            .setDescription(
`

**> Version:** Alpha (v0.005)
**> Auteur:** CHVRLY

`)
            
            message.channel.send({embed});
        }
    }
});

// !gb hugo est ...

hugoestune1 = "une grosse salope !"; hugoestune2 = "un suceur de chibre !"; hugoestune3 = "un putain de juif !";
hugoestune4 = "un homosexuel refoulé !"; hugoestune5 = "un sodomite !"; hugoestune6 = "un transexuel colombien";
hugoestune7 = "un hétéro-curieux !"; hugoestune8 = "le vide-couilles d'Houssem !"; hugoestune9 = "la victime de son lycée !";

clientDiscord.on('message', message => {
    if (message.channel.id === '462666329711837185') {
    if(message.content.startsWith(PREFIX + " hugo est ...")) {
           //number = 3;
           //var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
           var random = Math.floor(Math.random() * 9) + 1;
           switch (random) {
               case 1: message.channel.send ([hugoestune1]); break;
               case 2: message.channel.send ([hugoestune2]); break;
               case 3: message.channel.send ([hugoestune3]); break;
               case 4: message.channel.send ([hugoestune4]); break;
               case 5: message.channel.send ([hugoestune5]); break;
               case 6: message.channel.send ([hugoestune6]); break;
               case 7: message.channel.send ([hugoestune7]); break;
               case 8: message.channel.send ([hugoestune8]); break;
               case 9: message.channel.send ([hugoestune9]); break;
           }
        }
    }
});


// message.channel.send ({ files : ["./images/kiss.gif"] });

// message.channel.send("texte " + '<@' + 'UID' + '>' + "");

clientDiscord.login(process.env.TOKEN);
