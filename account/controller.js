const { Token } = require("../libs")

const AccountController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body

      if (!(email && password)) {
        res.status(400).send("Email & Password is Required")
      } 

      const listAccount = [
        { email: 'ghaninf@gmail.com', name: 'ghani', password: 123456 },
        { email: 'test@email.com', name: 'test', password: 'test@email.com' }
      ]
      const account = listAccount.find(el => el.email === email)
      if (!account) throw new Error.BadRequest('You have entered an invalid email or password.');

      user = {...account};

      user.token = Token.generateJWTToken(user);

      delete user.password;
      
      return res
        .status(200)
        .json(account);
    } catch (error) {
      next(error);
    }
  },
}

module.exports = AccountController;