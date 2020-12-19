module.exports = {
    name: 'commandlist',
    description: "commandlist?",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('Generalcommandlist')
        .setDescription('for help with general commands')
        .addFields(

            {name: '1st part of commands', value: ' 1.ping, 2.youtube, 3.pingeveryone'},
            {name: '2nd part of commands', value: '4.help, 5.timeout 6.suggest, 7.UBE'},
            {name: '3rd part of commands', value: ' 8.bubblewrap, 9.say'},
            {name: 'extracommandlists', value:'10.brockcommandlist, 11.uselesscommandlist, 12.libraycommandlsit, 13.commandlist_Info, 14.updateinfo'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Clipboard.svg/1024px-Clipboard.svg.png')
        .setFooter(' generalcommandlist for Tubabot')
        message.channel.send(newEmbed);
    }

    
}