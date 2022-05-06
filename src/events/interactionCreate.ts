module.exports = {
  name: 'interactionCreate',
  async execute(interaction: any) {
    if (!interaction.isCommand()) return;
    console.log(`${interaction.user.tag} in #${interaction.channel.name} of ${interaction.guild.name} triggered /${interaction.commandName}`);

    switch (interaction.commandName) {
    case 'ping':
      interaction.reply('Pong!');
      break;
    case 'hello':
      interaction.reply(`Hello ${interaction.user.username}`);
      break;
    }
  },
};
