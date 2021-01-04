const db = require('quick.db');

module.exports = {
    name: "bal",
    description: "bleh",

    async execute (client, message, args) {

        let user = message.mentions.users.first() || message.author;

        let bal = await db.fetch(`money_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

        const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Balance')
        .setDescription(`${user} currently has ${bal} coins`)
        .setTimestamp();

        message.channel.send(embed)
    }
}