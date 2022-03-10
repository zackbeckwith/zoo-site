import { Animal } from "../models/animal.js"
import { Profile } from "../models/profile.js"

function userProfile(req, res) {
  res.render('profiles/show', {
    title: 'Your Profile',
  })
}

function create(req, res) {
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