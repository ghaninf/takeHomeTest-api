const { Token } = require("../libs")

const AccountController = {
  async login(req, res, next) {
    try {
      const account = req.body

      if (!(account.email && account.password)) {
        res.status(400).send("Email & Password is Required")
      } 

      account.token = Token.generateJWTToken(account);

      delete account.password;
      
      return res
        .status(200)
        .json(account);
    } catch (error) {
      next(error);
    }
  },
}

module.exports = AccountController;