module.exports = {
    name: 'server',
    description: "for helping",
    execute(message, args, Discord){
        
        const helpembed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('SERVER INFO')
        .addFields(
            {name: 'server name:', value: `${message.guild.name}`},
            {name: 'Total Members:', value: `${message.guild.memberCount}`},
            {name: 'Server creation date:', value: `${message.guild.createdAt}`},
            {name: 'Server region:', value: `${message.guild.region}`},
        )
        
        .setFooter('Server for Tubabot')
        message.channel.send(helpembed)
    }

    
}
