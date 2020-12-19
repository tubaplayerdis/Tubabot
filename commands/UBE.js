module.exports = {
    name: 'UBE',
    description: "for UBE update!",
    execute(message, args, Discord){
        const UBEEmbed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('United Builders Empire(Click to join!)')
        .setURL('https://join.theube.xyz/')
        .setDescription('UBE is a active minecraft community with active members and taleted players. Join us today!')
        .addFields(

            {name: 'Members!', value: '145'},
            {name: 'Info!', value: 'UBE is a minecraft community with dedicated members that are talented in redstone and coding'},
            {name: 'extra info!', value: 'UBE has its own minecraft server with tons of builds and little secrets(sindab!!), UBE also does anarchy so if you need help just ask us.'},
            {name: 'Website!', value: 'https://tetx0bl1v10n.wixsite.com/unitedbuildersempire'}
        )
        .setImage('https://cdn.discordapp.com/attachments/718537836743360603/727920076686098512/Animated_GIF-downsized_large.gif')
        .setFooter('Join UBE today!')
        message.channel.send(UBEEmbed);
        message.channel.send('no really,join UBE')
    }
    
}