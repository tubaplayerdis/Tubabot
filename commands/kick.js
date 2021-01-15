module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.permissions.has("KICK_MEMBERS")){
           
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                let reason = args.slice(1).join(" ");
                if(!reason) reason = 'Unspecified';

                const author = message.author;
                const banembed = new Discord.MessageEmbed()
                .setColor('#FF4500')
                .setTitle('KICK')
                .setDescription(`${author} kicked ${memberTarget}`)
                .setFooter(`Reason: ${reason}`)
                memberTarget.send(`you were kicked in ${message.guild.name} for the follwoing reason: \`${reason}\``)
                message.channel.send(banembed);
            }else{
                message.channel.send(`error detected, user cannot be kicked, check user perms`);
            }
        } else{
            message.channel.send('you dont have perms')
        } 
        
        
    }
}
