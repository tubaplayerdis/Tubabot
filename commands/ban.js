module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.permissions.has("BAN_MEMBERS")){
            message.channel.send('you have perms')
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been Banned");
            }else{
                message.channel.send(`error detected, user cannot be Banned, check user perms`);
            }
        } else{
            message.channel.send('you dont have perms')
        } 
        
        
    }
}