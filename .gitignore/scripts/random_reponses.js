const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const client = new Discord.Client();
const config = require('./config.json');

clientDiscord.on('message', (message) => {
    if (message.author === client.user) return;
    if (message.content === "J'aime les seins" || message.content === "J'aime les boobs" ||
        message.content === "J'aime les gros seins" || message.content === "J'adore les seins" ||
        message.content === "J'adore les boobs" || message.content === "J'kiffe les seins") 
    { message.reply(" Moi aussi ;)") } 

    if (message.content === "J'aime les fesses" || message.content === "J'aime les culs" ||
        message.content === "J'aime les grosses fesses" || message.content === "J'adore les gros culs" ||
        message.content === "J'aime les gros boules" || message.content === "J'kiffe les grosses fesses") 
    { message.reply(" Pareil ! Il n'y a rien de plus confortable pour poser sa tête ;)") } 

});

clientDiscord.login(process.env.TOKEN);
