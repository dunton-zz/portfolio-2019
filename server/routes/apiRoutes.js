const path = require("path");

module.exports = app => {
  app.get("/oscar-noms", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../client", "json", "oscarnoms.json")
    );
  });
};
