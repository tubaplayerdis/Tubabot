module.exports = {
    name: 'commandlist',
    description: "commandlist?",
    execute(message, args, Discord){
        
        let member = message.author
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1500FF')
        .setTitle('General commandlist')
        .setDescription('for help with general commands')
        .addFields(
            {name: 'Info', value: 'all comamnds start with *'},
            {name: 'Help menu', value: '1 help \n 2 commandlist \n 3 infocommandlist'},
            {name: 'General commands', value: ' 1 ping \n 2 youtube \n 3 pingeveryone \n 4 help \n 5 timeout \n 6 suggest \n 7 UBE \n 8 bubblewrap \n 9 say'},
            {name: 'Economy', value: '1 work \n 2 bal \n 3 leaderboard \n 4 daily \n 5 store \n 6 buy \n 7 inventory \n 8 give \n 9 remove'},
            {name: 'Moderation', value: '1 ban \n 2 kick \n 3 purge(delete messages) \n 4 warn \n 5 checkwarns \n 6 deletewarns'},
            {name: 'Cool commands', value: '1 MAE \n 2 avatar \n 3 ascii \n 4 weather \n 5 meme \n 6 Trump \n 7 jimp'},
            {name: 'Utility', value: '1 checkinvite'},        
            {name: 'Extracommandlists', value:'1 uselesscommandlist \n 2 libraycommandlsit  \n 3 infocommandlist  \n 4 updateinfo'}
        )
        .setImage('https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Clipboard.svg/1024px-Clipboard.svg.png')
        .setFooter(' generalcommandlist for Tubabot')
        message.channel.send(`Into your dms ${member}`);
        member.send(newEmbed);
    }

    
}
