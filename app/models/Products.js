const db = require('./../config/database')

module.exports = {
    getAllProduct: (req, res) => {
        let sql = 'SELECT * FROM products'

        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    detailProduct: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },

    updateProduct: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE products SET ? WHERE id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },

    addProducts: (req, res) => {
        let data = req.body;

        let sql = 'INSERT INTO products SET?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },

    deleteProduct: (req, res) => {
        let sql = 'DELETE FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
