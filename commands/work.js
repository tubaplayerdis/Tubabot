const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "work",
    description: "Work your a** off",

    async execute (client, message, args) {
        let user = message.author;
        let timeout = 60000;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Work')
        .setDescription(`${user}, you worked for grandma and earned ${amount} coins`)
        .setTimestamp();

            message.channel.send(embed)
        }
    }
}