import fs from 'node:fs';
import { Client, Collection, Intents } from 'discord.js';
import { token } from '../config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  else if (commandName === 'server') {
    await interaction.reply(`Server info: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`);
  }
  else if (commandName === 'user') {
    await interaction.reply(`User info: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
  }
});

client.login(token);
