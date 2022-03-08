import { Animal } from "../models/animal.js"
import { Profile } from "../models/profile.js"
import axios from "axios"

function animalSearch(req, res) {
  axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand`)
  // .then(res => res.json())
  .then(animal => {
    res.render('safari', {
      title: 'Safari',
      animal,
      user: req.user,
    })
  })
}

function animalCreate(req, res) {
  const profile = Profile.findById(req.user.profile._id)
  Animal.find({name: req.body.name}, (err, found) => {
    if(!found.length){
      const animal = new Animal(req.body)
      animal.save()
      profile.animals.push(animal._id)
    }
  })
}

export {
  animalSearch,
  animalCreate
}



