module.exports = {
    name: "store",
    description: "View the store",

    async execute (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Store')
        .setDescription(`Car 🏎️ - 200 coins \n \n Watch ⏱️ - 250 coins \n \n Computer 💻 - 1,000 coins \n \n Drugs💰 - 10,000 coins \n \n 🛠️Tubapowers🛠️ - 100,000,000`)
        .setTimestamp();

        message.channel.send(embed);
    }
}
