module.exports = {
    name: 'purge',
    description: "for clearing messages",
    async execute(message, args, Discord){
        if(!args[0]) return message.reply("error detected, please enter in a number");
        if (isNaN(args[0])) return message.reply("error detected, please enter a valid number")
        if(args[0] > 100) return message.reply("error detected, please enter a value less than 100")
        if(args[0] < 1) return message.reply("error detected, plese enter a value more than 1")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}