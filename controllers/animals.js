import { Animal } from "../models/animal.js"
import { Profile } from "../models/profile.js"
import axios from "axios"

function animalSearch(req, res) {
  axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand`)
  .then(animal => {
    res.render('safari', {
      title: 'Safari',
      animal,
      user: req.user,
    })
  })
}

function animalCreate(req, res) {
  Profile.findById(req.user.profile._id, (err,profile) => {
  Animal.find({name: req.body.name}, (err, found) => {
    if(!found.length){
      const animal = new Animal(req.body)
      animal.save()
      profile.animals.push(animal._id)
      profile.save(err => {
        res.redirect('/zoos')
      })
    }
  })
  })
}

function index(req, res) {
  Animal.find({})
  .then(animals => {
    res.render('animals/index', {
      title: 'All Animals',
      animals,
  })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/animals/index}`)
  })
}

function zooShow(req, res) {
  Profile.findById(req.params.id)
  .then(zoo => {
    console.log(Profile.findById(req.user.zoo._id))
  })
}

export {
  animalSearch,
  animalCreate,
  index,
  zooShow
}



