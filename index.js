const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'YOUR_SUPER_SECRET_TOKEN' 

client.login(TOKEN)

client.on('ready', function() {
    setTimeout(() => {
        var d = new Date
        var daysleft = 25 - d.getDate()

        client.user.setActivity(daysleft + ' days before Christmas 🎄', { type: "WATCHING" })
    }, 86399990);

    console.log(`Connecté avec ${client.user.tag}`);
});