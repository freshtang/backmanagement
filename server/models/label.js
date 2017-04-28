const mongoose = require('mongoose'),
  Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

/*
 * Message 表
 */
const Label = new Schema({
  tag: { type: String, unique: true}
})

mongoose.model('Label', Label)
/**
 * Created by jeansmacbook on 2017/4/28.
 */
