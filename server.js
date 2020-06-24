const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cards = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/21131230?s=400&u=19afb2591054f0cc4d17bb3cf1260a3be9ae799f&v=4",
        name: "Edson Barbosa Junior",
        role: "Desenvolvedor Full Stack - DevOps",
        description: 'Desenvolvedor Full Stack, entusiasta de DevOps e apaixonado por Linux. - <a href="https://github.com/edsonBJR" target="_blank">Portifólio</a>',
        links: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/edson-bjr" },
            { name: "Twitter", url: "https://twitter.com/ebjrtux" },
            { name: "Instagram", url: "https://www.instagram.com/edsonbjr84" },
            { name: "Facebook", url: "https://www.facebook.com/edsonbj" }
        ]
    }

    return res.render("about", { about })
})

server.get("/curriculo", function(req, res) {
    return res.render("curriculo", { items: cards })
})

server.get("/card", function(req, res) {
    const id = req.query.id

    const card = cards.find(function(card) {
        return card.id == id
    })

    if (!card) {
        return res.render("Card não encontrado!")
    }

    return res.render("card", { item: card })
})

server.listen(5000, function() {
    console.log('Server is running...')
})