module.exports = {
    name: 'msgtest',
    description: "for testing this system",
    execute(message, args, Discord){
        let [color, title, url, description, image, footer, fieldname, fielddec] = args;
            message.reply(`Hello ${message.author.username}, your arguments are (your color ${color}), (your title ${title}), (your url ${url}), (your description to the title ${description}), (your image ${image}), (your footer ${footer}), (your fieldname ${fieldname}), (your fieldtext ${fielddec}) they are put in that order in my code `);
          
        

        (message.channel.send(`${color}`));
        (message.channel.send('sent var 1'));
        (message.channel.send(`${title}`));
        (message.channel.send('sent var 2'));
        (message.channel.send(`${url}`));
        (message.channel.send('sent var 3'));
        (message.channel.send(`${description}`));
        (message.channel.send('sent var 4'));
        (message.channel.send(`${image}`));
        (message.channel.send('sent var 5'));
        (message.channel.send(`${footer}`));
        (message.channel.send('sent var 6'));
        (message.channel.send(`${fieldname}`));
        (message.channel.send('sent var 7'));
        (message.channel.send(`${fielddec}`));
        (message.channel.send('sent var 8'));
        (message.channel.send('done'));
        

    }
}