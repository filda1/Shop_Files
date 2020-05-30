const  HomeController = {};

// Models
//const Note = require("../models/Note");

HomeController.getHome = (req, res) => {
  res.render("admin/dashboard");
};

module.exports = HomeController;