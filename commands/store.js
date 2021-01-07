module.exports = {
    name: "store",
    description: "View the store",

    async execute (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n \n Watch - 250 coins \n \n suggest more!`)
        .setTimestamp();

        message.channel.send(embed);
    }
}