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
        } else if (message.content.startsWith('*wierd1')){
            message.channel.send ('https://cdn.discordapp.com/attachments/629752300302237722/740366665962881024/video0.mp4')
        } else if (message.content.startsWith('*shutup')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/739284997201985648/video0-36.mp4')
        } else if (message.content.startsWith('*wierd2')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/736980424600846426/video0-9.mov')
        } else if (message.content.startsWith('*rickroll')){
            message.channel.send ('https://cdn.discordapp.com/attachments/703855942055493652/736846546104090654/Minecracft_wink.mp4')
        } else if (message.content.startsWith('*wierd3')){
            message.channel.send ('https://cdn.discordapp.com/attachments/724767300338712678/736088008893268048/video0.mp4')
        } else if (message.content.startsWith('*amazongo')){
            message.channel.send ('https://cdn.discordapp.com/attachments/717384499041665036/725224219134394428/amazon_go.mp4')
        } else if (message.content.startsWith('*NSFW1')){
            if (message.channel.nsfw) {
                message.channel.send('(warning this is DISTURBING),(warning this is NSFW!), https://media.discordapp.net/attachments/740191587149021204/742374616475107369/video0.mp4');
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*NSFW2')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/738881181759701074/754464641744371873/video0.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*brockcommandlist')){
            message.channel.send('1.annoybrock, 2.byebyebrock, more will come later')
        } else if (message.content.startsWith('*uselesscommandlist')){
            message.channel.send('1.tu admin, 2.kick, 3.ban, 4.testcommand, more will come')
        } else if (message.content.startsWith('*librarycommandlist')){
            client.commands.get('librarycommandlist').execute(message, args, Discord);
        } else if (command === 'infocommandlist'){
            client.commands.get('infocommandlist').execute(message, args, Discord);
        } else if (message.content.startsWith('*yes')){
            message.channel.send('*no')
        } else if (message.content.startsWith('*no')){
            message.channel.send('*yes')
        } else if (message.content.startsWith('*devhelp')){
            message.channel.send('hello tubaplayer here is the stuff for the next update 1 embed+UBE update olny a test embed put in right now')
        } else if (message.content.startsWith('*L1v1')){
            message.channel.send('https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755')
        } else if (message.content.startsWith('*L1v2')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384499041665036/731649428150157362/Yandere_Dev_Viva_La_Vida.mp4')
        } else if (message.content.startsWith('*L1v3')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384499041665036/739930648923472003/image0.jpg')
        } else if (message.content.startsWith('*L1v4')){
            message.channel.send('https://cdn.discordapp.com/attachments/738929450959503361/743942710297362472/video0.mp4')
        } else if (message.content.startsWith('*L1v5')){
            message.channel.send('https://cdn.discordapp.com/attachments/579937698039726081/740621521784930324/Renai_Circulation.mp4')
        } else if (message.content.startsWith('*L1v6')){
            message.channel.send('https://cdn.discordapp.com/attachments/717384185194479681/740685228972179596/video0_13.mov')
        } else if (message.content.startsWith('*L1v7')){
            message.channel.send('https://cdn.discordapp.com/attachments/740191587149021204/740295265000357995/image0.jpg')
        } else if (message.content.startsWith('*L1v8')){
            message.channel.send('https://cdn.discordapp.com/attachments/723195804906422362/729224124039430194/video0_21-2.mov')
        } else if (message.content.startsWith('*rickroll2')){
            message.channel.send('https://cdn.discordapp.com/attachments/745505740831064127/745634842347044934/why.mp4')
        } else if (message.content.startsWith('*updateinfo')){
            client.commands.get('updateinfo').execute(message, args, Discord);
        } else if (message.content.startsWith('*test')){           
            client.commands.get('test').execute(message, args, Discord);
        } else if (message.content.startsWith('*embedtest')){
            client.commands.get('embedtest').execute(message, args, Discord);
        } else if (message.content.startsWith('*UBE')){
            client.commands.get('UBE').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v1')){
            client.commands.get('L2v1').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v2')){
            client.commands.get('L2v2').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v3')){
            client.commands.get('L2v3').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v4')){
            client.commands.get('L2v4').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v5')){
            client.commands.get('L2v5').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v6')){
            client.commands.get('L2v6').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v7')){
            client.commands.get('L2v7').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v8')){
            client.commands.get('L2v8').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2v9')){
            client.commands.get('L2v9').execute(message, args, Discord);
        } else if (message.content.startsWith('*L2vI0')){
            client.commands.get('L2v10').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v1')){
            client.commands.get('L3v1').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v2')){
            client.commands.get('L3v2').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v3')){
            client.commands.get('L3v3').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v4')){
            client.commands.get('L3v4').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v5')){
            client.commands.get('L3v5').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v6')){
            client.commands.get('L3v6').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v7')){
            client.commands.get('L3v7').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v8')){
            client.commands.get('L3v8').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3v9')){
            client.commands.get('L3v9').execute(message, args, Discord);
        } else if (message.content.startsWith('*L3vI0')){
            client.commands.get('L3v10').execute(message, args, Discord);
        } else if (command === 'libraryinfo'){
            client.commands.get('libraryinfo').execute(message, args, Discord);
        } else if (command === 'purge'){
            client.commands.get('purge').execute(message, args, Discord);
        } else if (command === 'procced'){
            client.commands.get('procced').execute(message, args, Discord);
        } else if (message.content.startsWith('*yL2v4')){
            client.commands.get('L2v4').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL2v5')){
            message.channel.send('good');
        } else  if (command === 'nsfwcheck') {
            // You can get the Channel class (which contains the nsfw property) using the Message class.
            if (message.channel.nsfw) {
                message.channel.send("This channel is NSFW.");
            } else {
                message.channel.send("This channel is SFW.");
            }
        } else if (message.content.startsWith('*L4v1')){
            client.commands.get('L4v1').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v1')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/729051121133420564/774400257919680512/IcyDearIberianmole.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*L4v2')){
            client.commands.get('L4v2').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v2')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/667526139991818283/776592372409696256/VID-20201113-WA0006.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v2')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v3')){
            client.commands.get('L4v3').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v3')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667526139991818283/779743958376775700/VID-20201121-WA0044.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v3')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v4')){
            client.commands.get('L4v4').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v4')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667526139991818283/779852502324871188/VID_20201121_050437.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v4')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v5')){
            client.commands.get('L4v5').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v5')){
            if (message.channel.nsfw) {
                message.channel.send("https://media.discordapp.net/attachments/667559464383152140/776624959019155466/VID_20201113_071910.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v5')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v6')){
            client.commands.get('L4v6').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v6')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/745240109800095814/776213514603724800/video0.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v6')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v7')){
            client.commands.get('L4v7').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v7')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/742217561239978025/775210659541417994/VID-20201108-WA0021.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v7')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v8')){
            client.commands.get('L4v8').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v8')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/777452631844061194/video0-5-1.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v8')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4v9')){
            client.commands.get('L4v9').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4v9')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/777704335206252544/video0_72.mp4");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4v9')){
            message.channel.send('request succsesfully denied')
        } else if (message.content.startsWith('*L4vl0')){
            client.commands.get('L4v10').execute(message, args, Discord)
        } else if (message.content.startsWith('*yL4vl0')){
            if (message.channel.nsfw) {
                message.channel.send("https://cdn.discordapp.com/attachments/675162643895681073/778702801768939590/video0.mov");
            } else {
                message.channel.send("Error detected, channel not NSFW.");
            }
        } else if (message.content.startsWith('*nL4vl0')){
            message.channel.send('request succsesfully denied')
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
            client.commands.get('MAE').execute(message, args, Discord)
        } else if (message.content.startsWith('*TMAE')){
            client.commands.get('msgtest').execute(message, args, Discord) 
        } else if (message.content.startsWith('*HMAE')){
            client.commands.get('MAEhelp').execute(message, args, Discord)
        } else if (message.content === `${prefix}server`) {
            message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer creation date: ${message.guild.createdAt}\nServer region: ${message.guild.region}`);
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
            Message.channel.send('yo')
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
        } else if (message.content.startsWith('*ube')){
            client.commands.get('UBE').execute(client, message, args)
        } else if (message.content.startsWith('*trump')){
            client.commands.get('Trump').execute(client, message, args)
        } else if (message.content.startsWith('*mae')){
            client.commands.get('MAE').execute(client, message, args)
        } else if (message.content.startsWith('*hmae')){
            client.commands.get('HMAE').execute(client, message, args)
        } else if (message.content.startsWith('*tmae')){
            client.commands.get('msgtest').execute(client, message, args)
        }   
        
        


        
});

client.login('Nzc1MTI4MjI0MjI0NTA5OTYz.X6h0aQ.rcH2nu4PSsfHy1kFDis_nKcsDFs');
