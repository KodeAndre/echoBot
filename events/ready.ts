module.exports = {
  name: 'ready',
  once: true,
  execute(client: { user: any }) {
    console.log(`Logged in as ${client.user.tag}`);
  },
};