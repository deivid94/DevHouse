import { Router } from 'express'
const routes = new Router()


//get, post put delete

    routes.get('/',(req, res)=>{
        return res.json({ok: true})
    })

   
   export default routes