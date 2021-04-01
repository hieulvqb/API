const db = require('./../config/database')
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
        let data = req.body;

        let sql = 'INSERT INTO products  SET?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
