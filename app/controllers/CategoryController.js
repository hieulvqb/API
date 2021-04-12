const db = require('./../config/database')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM category'

        db.query(sql, (err, response) => {
                if (err) throw err
                res.json(response)
            })

    }
}
