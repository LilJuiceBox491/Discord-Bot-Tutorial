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
const handlers = ['command_handler', 'event_handler'];
const bot = new Discord.Client();

// Collections
bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

// Command & Event Handler
handlers.forEach(handler => {
  require(`./handlers/${handler}`)(bot, Discord);
});

// Execute
bot.login(process.env.DISCORD_TOKEN);
