const router = require('express').Router();
const { auth, validation } = require('../middleware');
const controller = require('./controller');
const SchemaProduct = require('./schema');

router.get(
  '/list',
  controller.getList()
);

router.get(
  '/:id',
  controller.getDetail()
);

router.post(
  '/create',
  auth.authenticate(),
  validation.validate({ schema: SchemaProduct.CreateProduct }),
  controller.create()
)
  
router.put(
  '/update/:id',
  auth.authenticate(),
  validation.validate({ schema: SchemaProduct.CreateProduct }),
  controller.update()
)

router.delete(
  '/delete',
  auth.authenticate(),
  controller.remove()
)

module.exports = router;