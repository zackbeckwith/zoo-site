import mongoose from 'mongoose'

const Schema = mongoose.Schema

const zoosSchema = new Schema({
  name: {type: String,
    required: true},
  collectedAnimals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  animals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }],
  zoos: [zoosSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
