const path = require("path");

module.exports = app => {
  app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "work", "contact.html"));
  });

  app.get("/resume", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "work", "resume.html"));
  });
};
