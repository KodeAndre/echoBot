module.exports = {
  name: 'ready',
  once: true,
  execute(client: { user: any }) {
    console.log(`Logged in as ${client.user.tag}`);
    client.user?.setActivity('with their code', { type: 'PLAYING' });
  },
};
