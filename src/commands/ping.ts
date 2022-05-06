import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  async execute(interaction: { reply: (arg0: string) => void }) {
    await interaction.reply('Pong!');
  },
};
