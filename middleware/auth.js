const { Token } = require('../libs')

const Authentication = {
  authenticate(roles = []) {
    return (req, res, next) => {
      const authToken = req.headers.authorization?.replace('Bearer ', '')

      if (authToken) {
        try {
          const auth = Token.verifyJWTToken(authToken)
          req.account = auth
          return next()
        } catch (error) {
          return res.status(401).json({ message: 'Unauthorized access.' })
        }
      }

      return res.status(401).json({ message: 'Unauthorized access.' })
    }
  }
}

module.exports = Authentication