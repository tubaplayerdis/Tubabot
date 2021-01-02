const randomPuppy = require('random-puppy');


module.exports = {
    name: "meme",
    description: "Gives you a meme",
    async execute (client, message, args) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your meme. From r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
        message.channel.send('if your message didnt send it was because it was a video\n press open original on the attacment to see');
        
    }
}