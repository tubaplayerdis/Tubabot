const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "give",
    description: "money",

    async execute (client, message, args) {
        let user = message.author;
        let timeout = 1;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let amount = 999;
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())

            const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Give')
        .setDescription(`${user}, you gave yourself money and earned ${amount} coins`)
        .setTimestamp();

            message.channel.send(embed)
        }
    }
}