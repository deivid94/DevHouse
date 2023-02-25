
const express = require ('express')
const routes = require('./routes')


 class app{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }

 }

 module.exports = new app().server