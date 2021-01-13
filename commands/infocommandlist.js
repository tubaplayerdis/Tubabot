module.exports = {
    name: 'infocommandlist',
    description: "for info on CMD lits",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('CMD info')
        .setDescription('CMD info for people who need CMD info!')
        .addFields(
            {name: 'help menu', value: 'these commands consist of help library info etc, mostly used for help'},
            {name: 'cool stuff', value: 'these commands are just commands that the dev found cool, weather gets weather in a area and acsii makes letters into ascii'},
            {name: 'moderation', value: 'moderation commands are used for moderating servers by autimating things like bulk message delete (use *purge)'},            
            {name: 'LibraryCMD', value: 'The library of commands is the main part of this bot and has alot of them use *libraryinfo for descriptions on libraries '},
            {name: 'uslessCMD', value: 'useless commands that dont do anything useful'},
            {name: 'extra ifno', value: 'for libraryCMD *librarycommandlist for uslessCMD use *uslesscommandlist'}
        )
        .setImage('https://lh3.googleusercontent.com/proxy/0NVfyYItGzpsP43kwb-msqVbDVkjnCAyT2I4nYUX35hSSA-at8h8gW2Hla8VD26y3yfrjDXvQF7SOhi1Z4ih18E8B3BNdOv1')
        .setFooter('CMD info command for Tubabot')
        message.channel.send(newEmbed);
    }

    
}
