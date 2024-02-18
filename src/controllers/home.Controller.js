const User = require("../models/User");

class HomeController {
  home(req, res, next) {
    User.find({})
      .then((users) => res.json(users))
      .catch(next);
  }
}

module.exports = new HomeController();
