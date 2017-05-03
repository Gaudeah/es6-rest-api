'use strict'
const express       =   require("express")
const bodyParser    =   require("body-parser")
const config        =   require("./config.js")
const app           =   express()
const apiRouter     =   require("./api/routes/index.js")

app.use(bodyParser.json())

app.use('/api', apiRouter)

app.listen(config.service.port)
console.log(`${config.service.motd} ${config.service.host}:${config.service.port}`);
