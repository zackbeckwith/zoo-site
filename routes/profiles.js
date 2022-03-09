import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { router } from './index.js'

router.get('/user', profilesCtrl.userProfile)

router.post('/user', profilesCtrl.createZoo)
export {
  router
}