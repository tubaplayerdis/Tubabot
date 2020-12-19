module.exports = {
    name: 'MAEhelp',
    description: "for help with the MSG command",
    execute(message, args, Discord){


        (message.reply(`,PLase read ALL of this so you can use the command `));
        (message.channel.send('give it time to load, it will say done when the bot is done'));

        message.channel.send('if your message didnt send it was because of an invalid image,');
        message.channel.send(' ');
        message.channel.send('color or url paramater,');
        message.channel.send(' ');
        message.channel.send('you need to put in a picture or a valid javascript color or a valid url .');
        message.channel.send(' ');
        message.channel.send('this is a more in depth command it will take time.');
        message.channel.send(' ');
        message.channel.send('use this example to edit and try out,');
        message.channel.send(' ');
        message.channel.send(' the example *MAE #FF0000 UBE https://join.theube.xyz/ forhelpwithlibrarycommand https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png test field1 yay');
        message.channel.send(' ');
        message.channel.send(' also when using the command the args statement can olny take a single word so "to be" would not work because it views it as two diffrent messages, hope this helps ');
        message.channel.send(' ');
        message.channel.send('everything is put in this order use *TMSG to test. color, title, url, description, image, footer, fieldname, fielddec, dont add commas in the message!');
        message.channel.send(' ');
        message.channel.send('https://childadolescentpsych.cumc.columbia.edu/sites/default/files/styles/555x315/public/HelpFriend-HelpSign-613244854%20555x315.jpg?itok=IzH1dmRK');
        message.channel.send('done!')
















    }
    }