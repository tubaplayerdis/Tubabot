module.exports = {
    name: 'MAEhelp',
    description: "for help with the MSG command",
    execute(message, args, Discord){


        let user = message.author;

        (message.reply(`,PLase read ALL of this so you can use the command, will also be in dms `));
        (user.send('give it time to load, it will say done when the bot is done'));

        user.send('if your message didnt send it was because of an invalid image,\ncolor or url paramater\nyou need to put in a picture or a valid javascript color or a valid url\nthis is a more in depth command it will take time.\nuse this example to edit and try out\nthe example *MAE #FF0000 UBE https://join.theube.xyz/ forhelpwithlibrarycommand https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png test field1 yay\nalso when using the command the args statement can olny take a single word so "to be" would not work because it views it as two diffrent messages, hope this helps\neverything is put in this order use *TMSG to test. color, title, url, description, image, footer, fieldname, fielddec, dont add commas in the message!');
        
















    }
    }
