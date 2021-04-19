const db = require('./../config/database')
const Validator = require('fastest-validator')

module.exports = {
    getAllCate: (req, res) => {
        let sql = 'SELECT * FROM category'

        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },

    createCate: (req, res) => {
        let data = req.body;

        console.log(data)
    }
}
