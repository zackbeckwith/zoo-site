import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/', isLoggedIn,  animalsCtrl.index)

export {
  router
}