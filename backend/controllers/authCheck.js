const jwt = require('jsonwebtoken');


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
                res.send({status: 0, loggedIn: true});
                next();
            }
        })
    }
    else{
        console.log("token not found");
        res.send({status: 401, loggedIn: false});
    }
}

module.exports = { requireAuth }