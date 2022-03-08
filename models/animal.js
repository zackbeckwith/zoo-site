import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: String,
  latinName: String,
  lifespan: Number,
  diet: String,
  geoRange: String,
  image: String,
}, {
  timestamps: true
})

const Animal = mongoose.model('Animal', animalSchema)

export {
  Animal
}