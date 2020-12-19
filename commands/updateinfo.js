module.exports = {
    name: 'updateinfo',
    description: "for updates",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00F9FF')
        .setTitle('Update info!!!')
        .setDescription('There is a new update so here is some info')
        .addFields(

            {name: 'UBE part', value: 'this add commands shuch as UBE error message command not defined'},
            {name: 'Library part', value: 'more sofisticated library has been added to the bot use *librarycommandlist'},
            {name: 'extras', value: 'expiremetal moderation commands are bieng added and are added'}
        )
        .setImage('https://lh3.googleusercontent.com/proxy/nNLG_Dtei3DXYuxP0QmYTWrHMqZ29WY1OTJaNB9X9K9FkNt7P0-897rEyslWvOSA8QoAOG7r4m7bwbkf1PJ-CY16ZdrLoEjnvQ')
        .setFooter('Update info for Tubabot')
        message.channel.send(newEmbed);
    }

    
}