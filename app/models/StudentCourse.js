var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

StudentSchema = require('./Student');
CourseSchema = require('./Course');

var StudentCourseSchema = new Schema({
    id: ObjectId,
    watched: { type: Boolean, default: false },
    watchDate: { type: Date },
    student: {
        type: Schema.ObjectId,
        ref: 'Student'
    },
    course: {
        type: Schema.ObjectId,
        ref: 'Course'
    }
});

var exports = module.exports = mongoose.model('StudentCourse', StudentCourseSchema);