
const jimp = require('jimp');

module.exports = {
    name: "jimp",
    description: "image manipulation",

    async execute (client, message, args) {


        let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) 
    let welcome = await jimp.read('https://cdn.discordapp.com/attachments/739487007876841542/797510607351578624/pll441gw.jpg') //We load the image from that link
    welcome.print(font, 200, 200, `Hello, ${message.author.tag}`) 
    welcome.write('Welcome2.png') //We create a png file called Welcome2
    message.channel.send(``, { files: ["Welcome2.png"] }) //We sent the file to the channel
        
// https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/866b6140-6e65-48fe-82b8-09d1c6dfcde3/d9efzq4-e1aeae8e-5c72-481c-a464-2849ce1147ee.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODY2YjYxNDAtNmU2NS00OGZlLTgyYjgtMDlkMWM2ZGZjZGUzXC9kOWVmenE0LWUxYWVhZThlLTVjNzItNDgxYy1hNDY0LTI4NDljZTExNDdlZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.y1jvc-NVT2GbNjVSZdUlotVsDdDa3BRmxgaqVZYQG8Q
        
    }
}