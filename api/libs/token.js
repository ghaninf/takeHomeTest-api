const SHA1 = require('sha1');
const JWT = require('jsonwebtoken');

class Token {
  static generateRandomSHA1() {
    return SHA1((new Date()).valueOf().toString() + Math.random().toString())
  }

  static generateJWTToken(account) {
    return JWT.sign(
      {
        email: account.email,
        name: account.name
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: '1D'
      }
    )
  }

  static verifyJWTToken(token) {
    return JWT.verify(token, process.env.TOKEN_KEY)
  }

  static decodeJWTToken(token) {
    return JWT.decode(token)
  }
}

module.exports = Token