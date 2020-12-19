module.exports = {
    name: 'MAE',
    description: "what people wanted",
    execute(message, args, Discord){
        
        let [color, title, url, description, image, footer, fieldname, fielddec] = args;


        const UBEEmbed = new Discord.MessageEmbed()
        .setColor(`${color}`)
        .setTitle(`${title}`)
        .setURL(`${url}`)
        .setDescription(`${description}`)
        .addFields(

            {name: `${fieldname}`, value: `${fielddec}`}
            
        )
        .setImage(`${image}`)
        .setFooter(`${footer}`)
        message.channel.send('Make an emebed by Tubabot')
        message.channel.send('if your message didnt send see *HMAE for help with the command also use *TMAE for testing the inputs')
        message.channel.send(UBEEmbed);
        message.channel.send('your emebed!')
    }
    
}