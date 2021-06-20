module.exports = {
    name: 'mastrubationtip',
    description: "ohhhhhhhhhh colors",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF4500')
        .setTitle('Mastrubation')       
        .setDescription('Boys and Girls')
        .addFields(

            {name: 'Boys', value: 'Use a blanket to mastrubate instead of your hand. put it around your dick and slide it accros your dick, also use a soft blanket'},
            {name: 'Girls', value: 'There are a couple methods and they will be put below'},
            {name: 'Method 1', value: 'Penetration, use your fingers to penetrate the vagina moving them in and out and you go, start with one finger then move onto more. you might also fell something blocking your fingers 2-3 inces in, that is called the hymen and you can just break it though it will bleed a little. keep penetrating until orgasm'},
            {name: 'Method 2', value: 'Rubbing, use your fingers to rub around the vagina, you will soon find a spot of most pleasure called the G-spot. contine running unitl orgasm.'},
            {name: 'Method 3', value: 'Nipple Rubbing, use your finger to rub your nipples.Rub until orgasm'},
            {name: 'For Girls', value: 'You can use any of the three methods in combination to achive orgasm'},
            {name: 'For Boys', value: 'YOu dont have to use a blanket, though that is a good idea if you dont have and lubricant, you can research on how to use lubricant.'}
        )
        .setImage('https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg?w=1110')
        .setFooter('You learned something')
        message.channel.send(newEmbed);
        
        
    }

    
}