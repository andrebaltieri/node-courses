var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CourseSchema = new Schema({
    id: ObjectId,
    title: { type: String, required: true }
});

var exports = module.exports = mongoose.model('Course', CourseSchema);