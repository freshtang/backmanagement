const mongoose = require('mongoose')
    , Schema = mongoose.Schema;
const ObjectId  = Schema.ObjectId;

/*
 * Message 表
 */
const Article = new Schema({
    title           : { type: String },
    tag             : { type: String },
    content         : { type: String },
    mdcontent       : { type: String },
    createdAt       : { type: Date, default: Date.now }
});

//MessageSchema.index({ target: 1 }, { });

mongoose.model('Article',Article);
