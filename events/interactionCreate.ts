module.exports = {
  name: 'interactionCreate',
  execute(interaction: any) {
    if (!interaction.isCommand()) return;
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered /${interaction.commandName}`);

    switch (interaction.commandName) {
    case 'ping':
      interaction.reply('Pong!');
      break;
    }
  },
};
