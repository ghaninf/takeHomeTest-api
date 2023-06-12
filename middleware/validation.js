const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const ajv = new Ajv()
addFormats(ajv)

const Validation = {
  validate(params) {
    return (req, res, next) => {
      const validate = ajv.compile(params.schema)
      const valid = validate(req.body)
      if (!valid) {
        return res.status(400).json({ message: validate.errors })
      }
  
      return next()
    }
  }
}

module.exports = Validation