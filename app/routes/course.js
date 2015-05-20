var Course = require('../models/Course');

module.exports = function(app) {
    app.get('/api/courses', function(req, res) {
        Course.find(function(err, courses){
            if(err)
                res.send(err);

            res.json(courses);
        });
    });

    app.post('/api/courses', function(req, res) {
        var course = new Course();
        course.title = req.body.title;

        course.save(function(err){
            if(err)
                res.send(err);

            res.json(course);
        });
    });
};