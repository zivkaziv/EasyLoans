var Loan = require('../models/Loan');

exports.signupPost = function(req, res, next) {
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('email', 'Email cannot be blank').notEmpty();
    req.assert('password', 'Password must be at least 4 characters long').len(4);

    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).send(errors);
    }

    let loan = new Loan({

    });
    loan.save((err,res)=>{
        res.send(res);
    });
    Loan.findOne({ email: req.body.email }, function(err, user) {
        if (user) {
            return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });
        }
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function(err) {
            res.send({ token: generateToken(user), user: user });
        });
    });
};