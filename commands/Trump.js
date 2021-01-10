const jimp = require('jimp');

module.exports = {
    name: "Trump",
    description: "image manipulation",

    async execute (client, message, args) {


        let sentence = message.content.split(" ");
            
            
        sentence.shift();
        
            
        sentence = sentence.join(" ");

        
        

        let font = await jimp.loadFont(jimp.FONT_SANS_16_BLACK) 

        let text = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) 


        let welcome = await jimp.read('https://cdn.discordapp.com/attachments/739487007876841542/797539221203976233/3a7aca39afb6e4cf1ae9b28c96eca323.gif')

        let box = await jimp.read('https://cdn.discordapp.com/attachments/739487007876841542/797510607351578624/pll441gw.jpg')
        
        let signature = await jimp.read('https://cdn.discordapp.com/attachments/739487007876841542/797623302185156658/trump-signature-16x-9_colorcorrected.jpeg')

        let trump = await jimp.read('https://cdn.discordapp.com/attachments/739487007876841542/797548908837994514/trump.jpeg')
        trump.resize(440, 292.6)
        box.resize(300, 294)
        signature.resize(200, 200)
        welcome.composite(trump, 0, 0) //We put the avatar on the image on the position 20, 20
        welcome.composite(box, 440, 0)
        welcome.composite(signature, 450, 35)
        welcome.print(font, 450, 5, sentence)
        welcome.write('Test.png')
        message.channel.send(``, { files: ["Test.png"] })
    
    
    
   



    }
}
