module.exports = {
    name: 'ntinfo',
    description: "displays network info",
execute(message, args, Discord, client){
             const embed = new Discord.MessageEmbed()
            .setTitle('Network info')
            .setColor('#FF4500')
            .setDescription(`Latency is ${Date.now() - message.createdTimestamp}ms. 
            API Latency is ${Math.round(client.ws.ping)}ms`); 

        message.channel.send(embed)              
      }
    }
