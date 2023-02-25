const { Router } = require('express')
const routes = new Router()


//get, post put delete

    routes.get('/',(req, res)=>{
        return res.json({ok: true})
    })

   module.exports = routes