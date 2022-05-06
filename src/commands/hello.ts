import { SlashCommandBuilder } from '@discordjs/builders';
module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Says hello to you'),
};
