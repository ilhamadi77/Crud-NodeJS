const express = require('express')
const router = express.Router();

const Skill = require('../model/Skill.model')


// ? link create hero 
// !disimpan bawah Remove hero malah error
router.get('/create', (req, res) => {

    res.render('addSkil')
});

//! Remove Hero
router.get('/remove/:id', (req, res) => {
    const id = req.params.id;
    Skill.removeSkill(id, res)
});

router.get('/', (req, res) => {
    Skill.getSkillHero(res)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Skill.getSkillHeroById(id, res)
});

router.post('/update', (req, res) => {
    const data = req.body
    const newData = {
        id: data.id,
        hero: data.hero,
        skill1: data.skill1,
        skill2: data.skill2,
        skill3: data.skill3,
        skillPasif: data.skillPasif
    }

    Skill.updateSkillHeroId(newData, res)
});

router.post('/add', (req, res) => {
    const data = req.body
    const newData = {
        hero: data.hero,
        skill1: data.skill1,
        skill2: data.skill2,
        skill3: data.skill3,
        skillPasif: data.skillPasif
    }

    Skill.addSkill(newData, res)
});

router.post('/remove', (req, res) => {
    const id = req.body.id
    Skill.removeSkill(id, res)
})

module.exports = router