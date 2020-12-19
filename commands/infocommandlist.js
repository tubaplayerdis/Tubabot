module.exports = {
    name: 'infocommandlist',
    description: "for info on CMD lits",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('CMD info')
        .setDescription('CMD info for people who need CMD info!')
        .addFields(

            {name: 'LibraryCMD', value: 'The library of commands is the main part of this bot and has alot of them use *libraryinfo for descriptions on libraries '},
            {name: 'uslessCMD', value: 'useless commands that dont do anything use'},
            {name: 'brockCMD', value: 'to annoy brock use '},
            {name: 'extra ifno', value: 'for brockcommandlist *brockcommandlist for libraryCMD *librarycommandlist for uslessCMD use *uslesscommandlist'}
        )
        .setImage('https://lh3.googleusercontent.com/proxy/0NVfyYItGzpsP43kwb-msqVbDVkjnCAyT2I4nYUX35hSSA-at8h8gW2Hla8VD26y3yfrjDXvQF7SOhi1Z4ih18E8B3BNdOv1')
        .setFooter('CMD info command for Tubabot')
        message.channel.send(newEmbed);
    }

    
}