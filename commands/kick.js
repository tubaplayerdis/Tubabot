module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('you have perms')
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            }else{
                message.channel.send(`error detected, user cannot be kicked, check user perms`);
            }
        } else{
            message.channel.send('you dont have perms')
        } 
        
        
    }
}