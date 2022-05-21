const express = require("express")
const router = express.Router()

const Hero = require('./../model/Hero.model')

// ? link create hero 
// !disimpan bawah Remove hero malah error
router.get('/create', (req, res) => {

  res.render('add')
});

// ! get all Hero list
router.get('/', (req, res) => {

  Hero.getHero(res)
});

//! Remove Hero
router.get('/remove/:id', (req, res) => {
  const id = req.params.id;
  Hero.removeHero(id, res)
});

//! Get hero list by ID
router.get('/:id', (req, res) => {
  const id = req.params.id
  Hero.getHeroById(id, res)
});

//! Add new hero
router.post('/update', (req, res) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    role: req.body.role
  }
  Hero.updateHeroById(data, res)
});

//! edit or update Hero
router.post('/add', (req, res) => {
  const data = {
    name: req.body.name,
    role: req.body.role
  };
  Hero.addHero(data, res)
});





module.exports = router