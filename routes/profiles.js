import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"
import { router } from './index.js'
import { isLoggedIn } from '../middleware/middleware.js'

router.get('/user', isLoggedIn, profilesCtrl.userProfile)

router.get('/profiles', isLoggedIn, profilesCtrl.listProfiles)

router.post('/createZoo', isLoggedIn, profilesCtrl.create)

export {
  router
}