var Student = require('../models/Student');

module.exports = function(app) {
    app.get('/api/students', function(req, res) {
        Student.find(function(err, students){
            if(err)
                res.send(err);

            res.json(students);
        });
    });

    app.post('/api/students', function(req, res) {
        var student = new Student();
        student.name = req.body.name;

        student.save(function(err){
            if(err)
                res.send(err);

            res.json(student);
        });
    });
};