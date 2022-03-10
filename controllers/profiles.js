import { Animal } from "../models/animal.js"
import { Profile } from "../models/profile.js"

function userProfile(req, res) {
  Profile.findById(req.user.profile._id)
  .populate({
    path: 'animals',
  })
  .then(profile => {
  res.render('profiles/show', {
    title: 'Your Profile',
    profile
  })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Profile.findById(req.user.profile._id)
  .then(profile => {
    profile.zoos.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/user`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/profiles/user`)
    })
  })
}

export {
  userProfile,
  create,
}