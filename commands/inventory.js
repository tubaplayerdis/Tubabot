const db = require('quick.db');


module.exports = {
    name: "inventory",
    description: "View your inventory",


    async execute (client, message, args) {

        let member = message.author

        let items = await db.fetch(message.author.id);
        if(items === null) items = "Nothing"

        const Embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .addField(`${member.username}'s inventory`, items)
        .setTimestamp()

        message.channel.send(Embed);
    }
}