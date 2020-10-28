module.exports = function({ webserver }) {
  webserver.get("/", (req, res) => {
    res.sendFile("home.html", {
      root: "./"
    });
  });
};
