module.exports = {
    name: 'reload',
    aliases: ['restart', 'rl'],  
    usage: `reload <category> <command>`,
    description: 'Reloads a command',
    execute: async (client, message, args, user, text, prefix) => {
        if(message.author.id !== 'ID OF THE  OWNER') return message.channel.send('You are?');//Add your id there so that only you can run this command.
        if(!args[0]) return message.channel.send('You need to include the category of the command');
        if(!args[1]) return message.channel.send('You need to include the name of the command!');

        let category = args[0];
        let command = args[1].toLowerCase();
        try {
            delete require.cache[require.resolve(`../../Commands/${category}/${command}.js`)]//Change the path depending on how are your folders located.
            client.commands.delete(command);
            const pull = require(`../../Commands/${category}/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`**${command}** was reloaded succesfully!`);
        } catch (error) {
            return message.channel.send(`There was an error trying to reload **${command}**: \`${error.message}\``);
        }
    }
}
// does not work and will have to modify to work with our command system
