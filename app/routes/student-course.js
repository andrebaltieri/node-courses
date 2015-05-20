var StudentCourse = require('../models/StudentCourse');

module.exports = function(app) {
    app.get('/api/student-courses', function(req, res) {
        StudentCourse.find().populate('course').populate('student').exec(function(err, items){
            if(err)
                res.send(err);

            res.json(items);
        });
    });

    app.get('/api/student/:id/courses', function(req, res) {
        var id = req.params.id;

        StudentCourse.find({ student: id}).populate('course').exec(function(err, items){
            if(err)
                res.send(err);

            res.json(items);
        });
    });

    //Parent.find({ 'status': 'published' })
    //    .where({ 'child.status': 'published' })
    //    .populate('child')
    //    .exec(function (err, results)

    app.post('/api/student-courses', function(req, res) {
        var studentCourse = new StudentCourse();
        studentCourse.watched = req.body.watched;
        studentCourse.watchDate = req.body.watchDate;
        studentCourse.student = req.body.student;
        studentCourse.course = req.body.course;

        studentCourse.save(function(err){
            if(err)
                res.send(err);

            res.json(studentCourse);
        });
    });
};
