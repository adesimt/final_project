const LocalStrategy = require('passport-local').Strategy;
// const mysql = require('mysql');
const db = require('../database/dbConfig.js');
const bcrypt = require('bcrypt');



module.exports = function(passport) {
    console.log("Passport Function triggered");
    //Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(username, password, done) {
        console.log(username);
       
    
        

        const findTrainer = 'SELECT * FROM trainer WHERE email = ?';
        //const findClient = 'SELECT * FROM client WHERE email = ?';
    
        db.query(findTrainer, username, function (err, user) {
            //console.log(trainer);

            //if (err)
            //return done(err);
            if (!user) {

                return done(null, false);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    return console.log(err.message);
                }
                if (result) {
                    return done(null, user);
              
                }
            });
        
        });
       
        
    }));
    
    passport.serializeUser(function(user, done) {
        done(null, user); 
    });
    
    passport.deserializeUser(function(user, done) {
        done(null, user); //you can access with req.user
    });
    
    }


    // db.query(findClient, [email], function (err, client) {
    //     console.log(client);
    //     if (err)
    //     return done(err);
    //     if (!client.length) {

    //         return done(null, false, req.flash('loginMessage', 'No user found.'));
    //     }
    //     bcrypt.compare(password, client.password, function (err, result) {
    //         if (err) {
    //             return console.log(err.message);
    //         }
    //         if (!client.length) {

    //             return done(null, false, req.flash('loginMessage', 'wrong password'));
    //         }
    //         if (result) {
    //             return done(null, client);
          
    //         }
    //     });
    
    // });