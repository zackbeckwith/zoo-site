import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'
const router = Router()

router.get('/animals', animalsCtrl.index)

export {
  router
}