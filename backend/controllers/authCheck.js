const jwt = require('jsonwebtoken');
const db = require('../database/dbConfig');




const getId = (id) => {
    const trainerId = id

    return trainerId

}

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists & is verified
    if(token){
        jwt.verify(token, 'fitness app secret', (err, decodedToken) => {
            if (err) {
                console.log("token invalid");
                res.send({status: 403, loggedIn: false})
            }else {
                console.log(decodedToken);
                res.send({status: 2, isAuth: true});
                next();
            }
        })
    }
    else{
        console.log("token not found");
        res.send({status: 401, loggedIn: false});
    }
}


// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, 'fitness app secret', (err, decodedToken) => {
            if (err) {
                console.log("token invalid");
                res.send({status: 403, loggedIn: false});
                next();
            }else {
                console.log(decodedToken);
                (decodedToken.id);

                const query = "SELECT * FROM trainer WHERE trainer_id = ?;";
                db.query(query, decodedToken.id, (err, result) => {
                    if(err){
                        res.send({err});
                    }
                    if(result.length > 0){
                        res.send({user: result, isAuth: true});
                        next();
                    }
                })
                //let user = await 

                //res.send({status: 2, loggedIn: true});
            }
        })

    }else{
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser }