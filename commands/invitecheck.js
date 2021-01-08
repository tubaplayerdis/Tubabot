const fetch = require('node-fetch');

module.exports = {
    name: "invitecheck",
    description: "who cares",

    async execute (client, message, args) {



let [code] = args;

fetch(`https://discordapp.com/api/invite/${code}`)
 .then((res) => res.json())
 .then((json) => {
  if (json.message === 'Unknown Invite') {
   message.channel.send('invalid invite')
  } else {
   message.channel.send('invite is valid')
  }
 });

    }
}