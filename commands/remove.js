const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "remove",
    description: "money",

    async execute (client, message, args) {
        let user = message.author;
        let timeout = 1;
        let author = await db.fetch(`worked_${message.guild.id}_${user.id}`);

        if(!user) return message.channel.send('Please specify a user, via mention or ID')
        if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`You cannot work again for ${time.minutes}m and ${time.seconds}s`)
        } else {
            let [amount] = args;
            db.subtract(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`worked_${message.guild.id}_${user.id}`, Date.now())


            

            const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Remove')
        .setDescription(`${user}, you didnt want your money and deleted ${amount} coins from your account`)
        .setTimestamp();

            message.channel.send(embed)
        }   
    }
}