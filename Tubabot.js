const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const { token2 } = require('./token.json')



client.on("ready", () =>{
    console.log('starting up');
    console.log('initializing');
    console.log('testing commands');
    console.log('finishing initializing');
    console.log('logging in');
    console.log('Tubabot is online');
    client.user.setActivity(`IN ${client.guilds.cache.size} SERVERS :) - USE *help`)
    

 });
 client.on("message", message => {
    if (message.author.bot) return false;

});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === '*ping'){
        message.channel.send('*pong!')
     } else if (message.content.startsWith('*youtube')){
            message.channel.send('https://www.youtube.com/channel/UCf_fvEG2qm6ypT69rU_Fz2A')
        } else if (command === 'pingeveryone'){
            message.channel.send('@.everyone')
        } else if (message.content.startsWith('*help')){
            client.commands.get('help').execute(message, args, Discord);
        } else if (message.content.startsWith('*timeout')){
            message.channel.send('@THE TIMEOUT CORNER')
        } else if (message.content.startsWith('*suggest')){
            message.channel.send('dm the owner of me for ideas')
        } else if (message.content.startsWith ('*commandlist')){
            client.commands.get('commandlist').execute(message, args, Discord);
        } else if (message.content.startsWith('*testcommand')){
            message.channel.send ('this is for testing')
        } else if(message.content.startsWith("*say")){
            message.content = message.content.replace(/@(everyone)/gi, "@.everyone").replace(/@(here)/gi, "@.here");
            message.content = message.cleanContent
            /* This takes the sentence sent, and makes it an array. In this case, a list of words. It 'splits' the list up wherever it sees space.*/
            let sentence = message.content.split(" ");
            
            /* .shift(), alters the list. It removes the first thing in the list. This would be the "!say" word. If we assigned shift() to a variable. Like "let x = msg.shift()" ... "x" would be the word that was removed. This is handy for grabbing command words. If you used shift() again, it would remove the second, then the third, each time that you type it.*/
            sentence.shift();
        
            // Now join the list back together into a sentence with "join()" and set that as the new sentence.
            sentence = sentence.join(" ");
        
            message.channel.send(sentence);
        
        } else if(message.content.startsWith('*tu Admin')){
            message.channel.send ('lol no adminfor u')
        } else if (message.content.startsWith('*bubblewrap')){
            message.channel.send ('Bubblewrap: \n||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop|||| pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||||pop||')
        } else if (message.content.startsWith('*oldcommand(type)UBE')){
            message.channel.send ('https://join.theube.xyz/')
        }  else if (message.content.startsWith('*uselesscommandlist')){
            message.channel.send('1.tu admin, , 2.testcommand, more will come')
        } else if (command === 'infocommandlist'){
            client.commands.get('infocommandlist').execute(message, args, Discord);
        } else if (message.content.startsWith('*yes')){
            message.channel.send('*no')
        } else if (message.content.startsWith('*no')){
            message.channel.send('*yes')
        } else if (message.content.startsWith('*devhelp')){
            message.channel.send('hello tubaplayer here is the stuff for the next update 1 embed+UBE update olny a test embed put in right now')
        } else if (message.content.startsWith('*updateinfo')){
            client.commands.get('updateinfo').execute(message, args, Discord);
        } else if (message.content.startsWith('*test')){           
            client.commands.get('test').execute(message, args, Discord);
        } else if (message.content.startsWith('*embedtest')){
            client.commands.get('embedtest').execute(message, args, Discord);
        } else if (message.content.startsWith('*UBE')){
            client.commands.get('UBE').execute(message, args, Discord);
        } else if (message.content.startsWith('*killbot')){
            if (message.mentions.users.id === "718631845604098159"){
            console.log ('shutting bot down')
            console.log ('10')
            console.log ('9')
            console.log ('8')
            console.log ('7')
            console.log ('6')
            console.log ('5')
            console.log ('4')
            console.log ('3')
            console.log ('2')
            console.log ('1')
            console.log ('done')
            client.commands.get('die').execute(message, args, Discord)
            } else {
                message.channel.send('olny the owner can kill the bot')
            }
            
        } else if (message.content.startsWith('*fixmc')){
            message.channel.send('http://chng.it/FTBnMwfSL7')
            message.channel.send('vote now!')
        } else if (message.content.startsWith('*kick')){
            client.commands.get('kick').execute(message, args)
        } else if (message.content.startsWith('*ban')){
            client.commands.get('ban').execute(message, args)
        } else if (message.content.startsWith('*MAE')){
            message.delete()
            client.commands.get('MAE').execute(message, args, Discord)
        } else if (message.content.startsWith('*TMAE')){
            client.commands.get('msgtest').execute(message, args, Discord) 
        } else if (message.content.startsWith('*HMAE')){
            client.commands.get('MAEhelp').execute(message, args, Discord)
        }  else if (message.content === `${prefix}server`) {
            client.commands.get("server").execute(message, args, Discord) 
        } else if (message.content.startsWith('*poll')){
           message.react('👍')
           message.react('👎') 
        } else if (message.content.startsWith('*yes')){
            message.channel.send('no')
        } else if (message.content.startsWith('*hostinginfo')){
            message.channel.send('hosted on a rasberry pi 400')
        } else if (message.content.startsWith('*piinfo')){
            message.channel.send('4gb of ram and a arm proccesor')
        } else if (message.content.startsWith('*invite')){
            message.channel.send('https://discord.com/oauth2/authorize?client_id=775128224224509963&scope=bot&permissions=8')
        } else if (message.content.startsWith('*yo')){
            message.channel.send('yo')
        } else if (message.content.startsWith('*avatar')){
            client.commands.get('avatar').execute(client, message, args)
        } else if (message.content.startsWith('*meme')){
            client.commands.get('meme').execute(client, message, args)
        } else if (message.content.startsWith('*weather')){
            client.commands.get('weather').execute(client, message, args)
        } else if (message.content.startsWith('*calculate')){
            client.commands.get('calculate').execute(client, message, args)
        } else if (message.content.startsWith('*ascii')){
            client.commands.get('ascii').execute(client, message, args)
        } else if (message.content.startsWith('*warn')){
            client.commands.get('warn').execute(client, message, args)
        } else if (message.content.startsWith('*checkwarns')){
            client.commands.get('warnings').execute(client, message, args)
        } else if (message.content.startsWith('*deletewarns')){
            client.commands.get('deletewarns').execute(client, message, args)
        } else if (message.content.startsWith('*bal')){
            client.commands.get('bal').execute(client, message, args)
        } else if (message.content.startsWith('*daily')){
            client.commands.get('daily').execute(client, message, args)
        } else if (message.content.startsWith('*work')){
            client.commands.get('work').execute(client, message, args)
        } else if (message.content.startsWith('*leaderboard')){
            client.commands.get('leaderboard').execute(client, message, args)
        } else if (message.content.startsWith('*store')){
            client.commands.get('store').execute(client, message, args)
        } else if (message.content.startsWith('*buy')){
            client.commands.get('buy').execute(client, message, args)
        } else if (message.content.startsWith('*inventory')){
            client.commands.get('inventory').execute(client, message, args)
        } else if (message.content.startsWith('*lb')){
            client.commands.get('leaderboard').execute(client, message, args)
        } else if (message.content.startsWith('*killbot')){
            if (message.author.id === '718631845604098159') {
                message.channel.send('killing')
                process.exit()
            } else {
                message.channel.send('olny the owner can kill the bot')
            }
        } else if (message.content.startsWith('*give')){
            if(message.member.permissions.has("MANAGE_MESSAGES")){
            client.commands.get('give').execute(client, message, args)
            } else {
                message.channel.send("olny people with the manage messages perm can give money")
            }
        } else if (message.content.startsWith('*checkinvite')){
            client.commands.get('invitecheck').execute(client, message, args)
        } else if (message.content.startsWith('*remove')){
            if(message.member.permissions.has("MANAGE_MESSAGES")){
            client.commands.get('remove').execute(client, message, args)
            } else {
               message.channel.send("olny people with the manage messages perm can remove money") 
            }
        } else if (message.content.startsWith('*jimp')){
            client.commands.get('jimp').execute(client, message, args)
        } else if (message.content.startsWith('*Trump')){
            client.commands.get('Trump').execute(client, message, args)
        } else if (message.content.startsWith('*inv')){
            client.commands.get('inventory').execute(client, message, args)
        }  else if (message.content.startsWith('*ube')){
            client.commands.get('UBE').execute(message, args, Discord)
        } else if (message.content.startsWith('*trump')){
            client.commands.get('Trump').execute(client, message, args)
        } else if (message.content.startsWith('*mae')){
            message.delete()
            client.commands.get('MAE').execute(message, args, Discord)
        } else if (message.content.startsWith('*hmae')){
            client.commands.get('HMAE').execute(message, args, Discord)
        } else if (message.content.startsWith('*tmae')){
            client.commands.get('msgtest').execute(message, args, Discord)
        } else if (message.content.startsWith('*balance')){
            client.commands.get('bal').execute(message, args, Discord)
        } else if (message.content.startsWith('purge'){
                    if(message.member.permissions.has("MANAGE_MESSAGES")){
            client.commands.get('purge').execute(client, message, args)
            } else {
               message.channel.send("olny people with the manage messages perm can bulk delete messages") 
            }
    
        }  else if (message.content.startsWith('*top')){
            client.commands.get('leaderboard').execute(client, message, args)
        }  else if (message.content.startsWith('*reload')){
            client.commands.get('reload').execute(client, message, args, user, text, prefix)
        } else if (message.content.startsWith('*ntinfo')){
            client.commands.get('ntinfo').execute(message, args, Discord, client)
        }


        
});

client.login(token2);
