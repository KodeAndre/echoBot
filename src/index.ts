import fs from 'node:fs';
import { Client, Collection, Intents } from 'discord.js';
import { token } from '../config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.once('ready', (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  let c;
  await client.channels.fetch(`${interaction.channel?.id}`).then((chan: any) => c = chan?.name);
  console.log(`${interaction.user.tag} used command {${interaction.commandName}} in #${c}`);

  if (!command) return;

  try {
    await command.execute(interaction);
  }
  catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token);
