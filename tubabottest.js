const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'

client.once('ready', () => {
console.log ('tubabot is online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        message.channel.send('pong!')
     } else if (command === 'youtube'){
            message.channel.send('https://www.youtube.com/channel/UCf_fvEG2qm6ypT69rU_Fz2A')
        } else if (command === 'pingeveryone'){
            message.channel.send('@everyone')
        } else if (command === 'help'){
            message.channel.send('hello I am tubas bot I soon will be used for free nitro use commandlist for cmds')
        } else if (command === 'timeout'){
            message.channel.send('@THE TIMEOUT CORNER')
        } else if (command === 'suggest'){
            message.channel.send('dm the owner of me for ideas')
        } else if (command === 'commandlist'){
            message.channel.send ('commands are 1ping 2youtube 3pingeveryone 4help 5timeout 6suggest')
        } else if (command === 'annoyBrock'){
            message.channel.send ('brock I have your ip and you phone number, i have power')
        } else if (command === 'tesmodule'){
            message.channel.send ('this is for testing')
        } else if(message.content.startsWith("!say")){

            /* This takes the sentence sent, and makes it an array. In this case, a list of words. It 'splits' the list up wherever it sees space.*/
            let sentence = message.content.split(" ");
            
            /* .shift(), alters the list. It removes the first thing in the list. This would be the "!say" word. If we assigned shift() to a variable. Like "let x = msg.shift()" ... "x" would be the word that was removed. This is handy for grabbing command words. If you used shift() again, it would remove the second, then the third, each time that you type it.*/
            sentence.shift();
        
            // Now join the list back together into a sentence with "join()" and set that as the new sentence.
            sentence = sentence.join(" ");
        
            message.channel.send(sentence);
        
        } else if(message.content.startsWith('!tu admin')){
            message.channel.send ('lol no adminfor u')
        } else if (command === 'byebyebrock'){
            message.channel.send ('@brockbreacher#1375')
        } else if (command === 'testhook'){
            message.channel.send ('tetno')
        }
        

        
});

client.login('Nzc1MTI4MjI0MjI0NTA5OTYz.X6h0aQ.rcH2nu4PSsfHy1kFDis_nKcsDFs');
