module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")){
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                let reason = args.slice(1).join(" ");
                if(!reason) reason = 'Unspecified';

                const author = message.author;
                const banembed = new Discord.MessageEmbed()
                .setColor('#FF4500')
                .setTitle('BAN')
                .setDescription(`${author} banned ${memberTarget}`)
                .setFooter(`Reason: ${reason}`)
                memberTarget.send(`you were banned in ${message.guild.name} for the follwoing reason: \`${reason}\``)
                message.channel.send(banembed);
            }else{
                message.channel.send(`error detected, user cannot be Banned, check user perms`);
            }
        } else{
            message.channel.send('you dont have perms')
        } 
        
        
    }
}
