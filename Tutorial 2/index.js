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

// Ready
bot.on('ready', () => {
  console.log('Ready');
});

// Message
bot.on('message', message => {
  if (message.author.bot) return;

  message.channel.send(message.content);
});

// Execute
bot.login(process.env.DISCORD_TOKEN);
