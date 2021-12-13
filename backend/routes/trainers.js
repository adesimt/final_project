var express = require('express');
var router = express.Router();
const db = require('../database/dbConfig');

// get all trainers
router.get('/client-dashboard/trainers', function(req, res, next) {
  
  const query = "SELECT * FROM trainer";

  db.query(query, (err, result) => {
    res.send(result);
  })


});


// get a single trainer
router.get('/trainers/profile/:id', function(req, res, next) {

  const id = req.params.id;
  const query = 'SELECT * FROM trainer WHERE trainer_id = ?';
  db.query(query, [id], (err, result) => {
    if(err){
      console.log(err);
    }
    res.send(result);
  })

  

  
  // const query = "SELECT * FROM trainer";

  // db.query(query, (err, result) => {
  //   res.send(result);
  // })


});




module.exports = router;
