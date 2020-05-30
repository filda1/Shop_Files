const AdminModel = require('../models/admin_new');
const passport = require("passport");
var bcrypt = require('bcrypt');

const  AdminController = {};


AdminController.getAdmin = async (req, res, next) => {
    const users= await AdminModel.find();
    res.json(users);
    };

AdminController.register = (req, res) => {
    res.render('admin/register');
  };

  AdminController.createAdmin = async (req, res) => {
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
      res.render("register", {
        errors,
        name,
        email,
        password,
        confirm_password
      });
    } else {
      // Look for email coincidence
      const emailAdmin = await AdminModel.findOne({ email: email });
      if (emailAdmin) {
        req.flash("error_msg", "The Email is already in use.");
        res.redirect("register");
      } else {
        // Saving a New User
        const newAdmin = new AdminModel({ name, email, password });
        newAdmin.password = await newAdmin.encryptPassword(password);
        await newAdmin.save();
        req.flash("success_msg", "You are registered.");
        res.redirect("login");
      }
    }
  };

  /*AdminController.createAdmin = (req, res) => {

    res.send("ok");
  };*/


  AdminController.login = (req, res) => {
    res.render("admin/login");
  };

  AdminController.authLogin = passport.authenticate("local", {
    successRedirect: "home",
    failureRedirect: "login",
    failureFlash: true
  });

  AdminController.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("login");
  };



module.exports = AdminController;