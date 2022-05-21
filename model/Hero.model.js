const db = require('../connect/config')

exports.getHero = (res) => {
    //! query data
    const sql = "SELECT * FROM `hero`"

    //!Execute Data
    db.query(sql, (error, result) => {
        if (error) return console.log("error:", error)

        const heros = {
            title: 'Heroes List',
            data: JSON.parse(JSON.stringify(result))
        }

        res.render('index', { heros })
        res.end()
    });
}


exports.getHeroById = (id, res) => {
    const sql = `SELECT * FROM hero WHERE id ='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log("error", error)

        const hero = {
            title: 'Edit Hero',
            data: JSON.parse(JSON.stringify(result))
        }

        res.render('heroDetail', { hero })
        res.end()
    });
}

exports.updateHeroById = (data, res) => {
    const id = data.id
    const name = data.name
    const role = data.role

    const sql = `UPDATE hero SET name='${name}', role='${role}' WHERE id ='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)
        res.redirect('/hero')
        res.end()
    });
}

exports.addHero = (data, res) => {
    const name = data.name;
    const role = data.role;

    const sql = `INSERT INTO hero (name,role) VALUES ('${name}','${role}')`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)
        res.redirect('/hero')
        res.end()
    });
}

exports.removeHero = (id, res) => {
    const sql = `DELETE FROM hero WHERE id='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error:', error);
        res.redirect('/hero')
        res.end()
    })
}