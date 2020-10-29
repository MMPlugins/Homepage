module.exports = function({ webserver, commands, bot, config }) {
  webserver.get("/", (req, res) => {
    res.sendFile("home.html", {
      root: "./"
    });
  });
  commands.addGlobalCommand('home', '') async (msg, args, thread) => {
    bot.createMessage(msg.channel.id, config.url)
  });
};
