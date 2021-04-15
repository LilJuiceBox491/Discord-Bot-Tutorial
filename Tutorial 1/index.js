// Imports
const Discord = require('discord.js');

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
