module.exports = {
    name: 'updateinfo',
    description: "for updates",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00F9FF')
        .setTitle('Update info!!!')
        .setDescription('There is a new update so here is some info')
        .addFields(

            {name: 'Overhall part', value: 'overhaled a lot of commands and made alot of embeds'},
            {name: 'Library part', value: 'more sofisticated library has been added to the bot use *librarycommandlist'},
            {name: 'extras', value: 'added moderation commads,(needs admin to work)\n(ban, kick, purge(delete messages))\n also added make an emebd use *HMAE,'}
        )
        .setImage('https://lh3.googleusercontent.com/proxy/nNLG_Dtei3DXYuxP0QmYTWrHMqZ29WY1OTJaNB9X9K9FkNt7P0-897rEyslWvOSA8QoAOG7r4m7bwbkf1PJ-CY16ZdrLoEjnvQ')
        .setFooter('Update info for Tubabot')
        message.channel.send(newEmbed);
    }

    
}
