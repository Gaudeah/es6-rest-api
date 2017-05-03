'use strict'
const express       =   require("express")
const bodyParser    =   require("body-parser")
const fs            =   require('fs')
const router        =   module.exports = express.Router()
const path          =   "./api/routes/"

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the main API route, try /api/list to get full routes list of the API !' })
})

router.get('/list', function(req, res) {
    let routes = [];
    fs.readdir(path, (err, files) => {
        if (err)
        {
            res.writeHead(500)
            return
        }
        files.forEach(file => {
            if (fs.statSync(path + file).isDirectory())
                routes.push(`/api/${file}`)
        })
      res.json({ message: 'Try to explore these routes !', routes: routes })
    })
})
