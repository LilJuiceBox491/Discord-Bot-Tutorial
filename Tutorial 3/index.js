// Imports
const Discord = require('discord.js');
const express = require('express');

// Server
const app = express();

app.get('/', (req, res) => {
  res.write('This Is Homepage');
  res.end();
});

app.listen(8080);

// Setup
const bot = new Discord.Client();
const prefix = '!';

// Ready
bot.on('ready', () => {
  console.log('Ready');
});

// Message
bot.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift();

  if (cmd == 'ping') {
    message.channel.send('Pong!');
  }

  else if (cmd == 'test') {
    message.channel.send('Test');
  }

});

// Execute
bot.login(process.env.DISCORD_TOKEN);
