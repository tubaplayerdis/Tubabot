const db = require('quick.db');
module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async execute (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'car'){
            if(amount < 200) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 200);
            db.push(message.author.id, "Car🏎️");
            message.channel.send('Successfully bought one car')
        }
        if(purchase === 'watch'){
            if(amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch⏱️");
            message.channel.send('Successfully bought one watch')
        }
        if(purchase === 'computer'){
            if(amount < 1000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
            db.push(message.author.id, "Computer💻");
            message.channel.send('Successfully bought one computer')
        }
        if(purchase === 'drugs'){
            if(amount < 10000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 10000);
            db.push(message.author.id, "Drugs💰");
            message.channel.send('Successfully bought one dose of drugs')
        }
        if(purchase === 'tubapowers'){
            if(amount < 100000000) return message.channel.send('You do not have enough money to obtain Tubapowers.');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 100000000);
            db.push(message.author.id, "🛠️Tubapowers🛠️");
            message.channel.send('You have gained Tubapowers')
        }
    }
}
