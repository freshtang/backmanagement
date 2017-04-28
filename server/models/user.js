
const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/*
 * User 表
 */
const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String }
})

UserSchema.index({ username: 1 }, { unique: true })

mongoose.model('User', UserSchema)
