const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const db = require('../database/dbConfig');
const bcrypt = require('bcrypt');





// router.get('/login', (req, res, next) => {
//     if(req.session.trainer){
//         res.send({ loggedIn: true, user: req.session.trainer});
//     }else{
//         res.send({ loggedIn: false });
//     }

// })




router.post('/login', (req, res, next) => {
    

    const { email, password } = req.body;

    const trainer_query = "SELECT * FROM trainer WHERE trainer_email = ?;"
    const client_query = "SELECT * FROM client WHERE client_email = ?;"

    db.query(trainer_query, email,(err, result1)=> {
        
        if(err){
            res.send({err});
        }

        if(result1.length > 0){
            bcrypt.compare(password, result1[0].trainer_password, (error, response) => {
                if(response){
                    //session
                    req.session.trainer = result1
                    console.log(req.session.trainer);
                    res.send({user: result1});
                }else{
                    db.query(client_query, email, (err, result2) => {
                            if(err){
                                res.send({err});
                            }
                            if(result2.length > 0){
                                bcrypt.compare(password, result2[0].client_password, (err, response) => {
                                    if(response){
                                        //session
                                        res.send(result2)
                                    }else{
                                        res.send({message: "Wrong email or password combination!"});
                                    }
                    
                                });
                            }else{
                                res.send({message: "User doesn't exist"});
                            }
                        })
                }
            })
        }else{
            res.send({message: "User doesn't exist"});
             
        }
    })










    // db.query(client_query, email, (err, result2) => {
    //     if(err){
    //         res.send({err});
    //     }
    //     if(result2.length > 0){
    //         bcrypt.compare(password, result2[0].password, (err, response) => {
    //             if(response){
    //                 res.send(result2)
    //             }else{
    //                 res.send({message: "Wrong email or password combination!"});
    //             }

    //         });
    //     }else{
    //         res.send({message: "User doesn't exist"});
    //     }
    // })




    // passport.authenticate('local', (err, user, info) => {
    //     if(err) throw err;
    //     if(!user) res.send("No user exists");
    //     else{
    //         req.logIn(user, err => {
    //             if (err) throw err;
    //             res.send('Successfully Authenticated');
    //             console.log(req.user);
    //         })
    //     }
    // })(req, res, next)
})

module.exports = router;