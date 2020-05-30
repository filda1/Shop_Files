const  UseradminController = {};

// Models
//const Note = require("../models/Note");

UseradminController.show = (req, res) => {
  res.render("admin/users/showusers");
};

UseradminController.post = (req, res) => {
  res.render("admin/users/postuser");
};

UseradminController.edit = (req, res) => {
  res.render("admin/users/edituser");
};

UseradminController.delete = (req, res) => {
  res.render("admin/users/deleteuser");
};

module.exports = UseradminController;