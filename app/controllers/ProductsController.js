const product = require('./../models/Products')

module.exports = {
    get: (req, res) => {
        product.getAllProduct(req, res)
    },

    detail: (req, res) => {
        product.detailProduct(req, res)
    },

    update: (req, res) => {
        product.updateProduct(req, res)
    },

    store: (req, res) => {
        product.addProducts(req, res)
    },

    delete: (req, res) => {
        product.deleteProduct(req,res)
    }
}
