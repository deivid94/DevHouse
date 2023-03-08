import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import path from 'path'

 class app{
    constructor(){
        this.server = express()
        mongoose.set('strictQuery', true)
        mongoose.connect('mongodb+srv://deivid:devhouse@devhouse.ldkjz2o.mongodb.net/devhouse?retryWrites=true&w=majority',{
        
            
        })

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname,'..','uploads'))
        )
        this.server.use(express.json())
    }
    routes(){
        this.server.use(routes)
    }

 }

 export default new app().server