import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import SessionController from './controllers/SessionController'
import HouseController from './controllers/HouseController'
import DashboardControllers from './controllers/DashboardControllers'
import ReseverController from './controllers/ReseverController'
import { restart } from 'nodemon'


const routes = new Router()
const upload = multer(uploadConfig)

  routes.post('/sessions', SessionController.store)
  routes.post('/houses',upload.single('thumbnail'),HouseController.store)

  routes.get('/houses', HouseController.index)
  routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)

  routes.delete('/houses',HouseController.destroy)
  routes.get('/dashboard', DashboardControllers.show)
  
  routes.post('/houses/:house_id/reserve',ReseverController.store)
  routes.get('/reserves', ReseverController.index)

  routes.delete('/reserves/cancel', ReseverController.destroy)
   
   export default routes