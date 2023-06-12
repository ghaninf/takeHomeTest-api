const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  price: {
    type: Number,
    required: true
  },
  sell: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  base64: {
    type: String,
    required: true
  },
  createdAt: Number,
  updatedAt: Number,
  deletedAt: {
    type: Number,
    default: 0
  }
}, {
  minimize: false,
  timestamps: { currentTime: () => Date.now() }
})

module.exports = mongoose.model('Product', ProductSchema)