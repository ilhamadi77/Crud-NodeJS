const port = 5002;
const express = require("express");
const server = express();

const heroController = require('./controllers/hero.controller')
const skillController = require('./controllers/skill.controller')

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'ejs')
server.set("views", "view")

//Controllre
server.use("/hero", heroController)
server.use("/skill", skillController)

server.use('/', (req, res) => {
    res.send(`<h2>Wilujeng Sumping Kang Dea</h2>
    Mangga dihaturanan <br>
    <a href='/hero'>klik Link </a>`)
})
server.listen(port, function () {
    console.log("server runing on", port)
})