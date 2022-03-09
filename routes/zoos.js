import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'
const router = Router()
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/', isLoggedIn, animalsCtrl.animalSearch)
router.get('/animals', isLoggedIn, animalsCtrl.index)
router.post('/', isLoggedIn, animalsCtrl.animalCreate)

export {
  router
}