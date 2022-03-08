import { Router } from 'express'
import * as animalsCtrl from '../controllers/animals.js'
const router = Router()


router.get('/', animalsCtrl.animalSearch)

router.post('/', animalsCtrl.animalCreate)

export {
  router
}