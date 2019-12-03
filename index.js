const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = 'YOUR_SUPER_SECRET_TOKEN' 

client.login(TOKEN)

client.on('ready', () {
    setInterval(() => {
        var d = new Date
        var daysleft = 25 - d.getDate()
        
        if (d.getHours() === 1){
        client.user.setActivity(daysleft + ' days before Christmas 🎄', { type: "WATCHING" })
        //client.user.setActivity('les '+ daysleft + ' avant Noel 🎄', { type: "WATCHING" })
        }
    }, 7200000);

    console.log(`Connecté avec ${client.user.tag}`);
});
