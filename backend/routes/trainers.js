var express = require('express');
var router = express.Router();
const db = require('../database/dbConfig');

/* GET users listing. */
router.get('/client-dashboard/trainers', function(req, res, next) {
  
  const query = "SELECT * FROM trainer";

  db.query(query, (err, result) => {
    res.send(result);
  })


});

module.exports = router;
