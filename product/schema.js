const SchemaProduct = {
  CreateProduct: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
      sell: { type: 'number' },
      stock: { type: 'number' },
      // file: {
      //   type: 'object',
      //   properties: {
      //     URL: { type: 'string' },
      //     filename: { type: 'string' }
      //   },
      //   required: [ 'URL', 'filename' ]
      // }
    },
    required: [
      'name',
      'price',
      'sell',
      'stock',
      // 'file'
    ]
  }
}

module.exports = SchemaProduct