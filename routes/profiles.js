import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { router } from './index.js'
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/user', isLoggedIn, profilesCtrl.userProfile)

router.post('/user', isLoggedIn, profilesCtrl.createZoo)

export {
  router
}