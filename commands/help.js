module.exports = {
    name: 'help',
    description: "for helping",
    execute(message, args, Discord){
        
        let member = message.author
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('Help')
        .setDescription('Help commands for peeps who need help!')
        .addFields(

            
            {name: 'Command help', value: 'use *commandlist for commands'},
            {name: 'Extra help', value: 'use *infocommandlist. join server for more help, https://discord.gg/gMWaasvj8M'},
            {name: 'Invite bot', value: 'https://discord.com/oauth2/authorize?client_id=775128224224509963&scope=bot&permissions=8'}
        )
        .setImage('https://childadolescentpsych.cumc.columbia.edu/sites/default/files/styles/555x315/public/HelpFriend-HelpSign-613244854%20555x315.jpg?itok=IzH1dmRK')
        .setFooter('help command for Tubabot')
        message.channel.send(`Into your dms ${member}`);
        member.send(newEmbed);
    }

    
}
