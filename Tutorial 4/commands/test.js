module.exports = {
  name: 'test',
  aliases: ['test2'],
  description: 'Test the bot',
  execute(bot, message, args, Discord) {
    message.channel.send('Test!');
  }
}
