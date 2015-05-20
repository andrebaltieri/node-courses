var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var StudentSchema = new Schema({
    id: ObjectId,
    name: { type: String, required: true }
});

var exports = module.exports = mongoose.model('Student', StudentSchema);