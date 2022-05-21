const db = require('../connect/config')

exports.getSkillHero = (res) => {
    //query skill
    const sql = "SELECT * FROM `skill`"

    db.query(sql, (error, result) => {
        if (error) return console.log("error:", error)

        const skills = {
            title: 'List Skill Hero Mobile Legend',
            data: JSON.parse(JSON.stringify(result))
        }
        res.render('heroSkill', { skills })
        res.end()
    });
};

exports.getSkillHeroById = (id, res) => {
    const sql = `SELECT * FROM skill WHERE id ='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log("error", error)

        const skill = {
            title: 'Skill Hero BY ID',
            data: JSON.parse(JSON.stringify(result))
        }

        res.render('heroDetailSkill', { skill })
        res.end()
    });
}

exports.updateSkillHeroId = (data, res) => {
    const id = data.id;
    const hero = data.hero;
    const skill1 = data.skill1;
    const skill2 = data.skill2;
    const skill3 = data.skill3;
    const skillPasif = data.skillPasif;

    const sql = `UPDATE skill SET hero='${hero}', skill1='${skill1}', skill2='${skill2}', skill3='${skill3}', skillPasif='${skillPasif}' WHERE id = '${id}' `

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)
        res.redirect('/skill')
        res.end()
    });

}

exports.addSkill = (data, res) => {
    const hero = data.hero;
    const skill1 = data.skill1;
    const skill2 = data.skill2;
    const skill3 = data.skill3;
    const skillPasif = data.skillPasif;

    const sql = `INSERT INTO skill (hero,skill1,skill2,skill3,skillPasif) 
    VALUES
    ('${hero}','${skill1}','${skill2}','${skill3}','${skillPasif}')`

    db.query(sql, (error, result) => {
        if (error) return console.log("error :", error)
        res.redirect('/skill')
        res.end()
    });
}

exports.removeSkill = (id, res) => {
    const sql = `DELETE FROM skill WHERE id='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log("error : ", error);
        res.redirect('/skill')
        res.send()
    });
}
