module.exports = async (Discord, bot, message) => {
  const prefix = '!';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift();

  const command = bot.commands.get(cmd) || bot.commands.find(i => i.aliases && i.aliases.includes(cmd));

  if (command) command.execute(bot, message, args, Discord);
}
