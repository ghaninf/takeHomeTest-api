const Product = require('./model');

const ProductController = {
  async getList(req, res, next) {
    try {
      const { page, offset, limit } = req.query
      const products = await Product
        .find()
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(offset)
        .lean()
        .exec();
      const totalDocs = await Product
        .find()
        .countDocuments()
  
      return res
        .status(200)
        .json(products, { page: page, limit: limit, total: totalDocs })
    } catch (error) {
      next(error);
    }
  },

  async getDetail(req, res, next) {
    try {
      const product = await Product
        .findOne({ _id: req.params.id })
  
      return res
        .status(200)
        .json(product)
    } catch (error) {
      next(error);
    }
  },

  async create(req, res, next) {
    try {
      const data = req.body
      const product = await Product
        .create(data);

      return res
        .status(200)
        .json(product)
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      let product = {};
      product = await Product
        .findOne({_id: req.params.id})

      if (!product) {
        return res
          .status(400)
          .json({ message: 'Product doesn\'t exist.' })
      }

      product = req.body
      product = await Product.save()

      return res
        .status(200)
        .json(product)
    } catch (error) {
      next(error);
    }
  },

  async remove(req, res, next) {
    try {
      let product = {}
      product = await Product
        .findOne({ _id: req.params.id, deletedAt: 0 })

      if (!product) {
        return res
          .status(400)
          .json({ message: 'Product doesn\'t exist.' })
      }

      product.deletedAt = Date.now();
      await product.save();

      return res
        .status(200)
        .json({ message: 'Product has been removed.'})
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
