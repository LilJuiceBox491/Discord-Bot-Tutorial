module.exports = {
  name: 'ping',
  aliases: ['pi', 'test1'],
  description: 'Test the bot',
  execute(bot, message, args, Discord) {
    message.channel.send('Pong!');
  }
}
