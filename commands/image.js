
var Scraper = require('images-scraper');


const google = new Scraper({
  puppeteer: {
    headless: false,
  },
});

module.exports = {
    name: 'image',
    description: 'idk',
    async execute(client, message, args){
        const image_query = args.join(' ');

        const Picemebed = new Discord.MessageEmbed()
        .setColor('#E5FF00')
        .setTiltle("Your image")
        .setImage(image_results[0].url)
        .setTimastamp()
        .setFooter('image command for Tubabot')

        const errorembed = new Discord.MessageEmbed()
        .setColor('#E5FF00')
        .setTiltle('ERROR')
        .setDescription('There was an error proccesing your request, please select a valid image name')
        .setTimastamp()
        .setFooter('Tubabot error')
        if(!image_query) return message.channel.send(errorembed)
        const image_results = await google.scrape(image_query, 1);
        message.channel.send(errorembed)
    }
}
