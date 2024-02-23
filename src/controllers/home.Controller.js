const User = require("../models/User");
const { multipleMongooseToObject, mongooseToObject } = require("../utils");

class HomeController {
  home(req, res, next) {
    res.render("home");
  }
  signUp(req, res, next) {
    res.render("user/register");
  }
  registed(req, res, next) {
    const user = new User(req.body);

    user
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
  login(req, res, next) {
    res.render("user/login");
  }
  logged(req, res, next) {
    let name = req.body.name;
    let pass = req.body.pass;
    User.findOne({ name, pass })
      .then((data) => {
        if (data) {
          res.redirect("/");
        } else {
          res.json("err");
        }
      })
      .catch(next);
  }
}

module.exports = new HomeController();
