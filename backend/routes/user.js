const express = require('express');
const router = express.Router();
const db = require('../database/dbConfig');





/* login */
router.get('/user:id', (req, res, next) => {
    try {

        const id = req.params.id;
        const query = `
                SELECT t.trainer_first_name, t.trainer_last_name, t.trainer_gender, t.trainer_city, t.trainer_state, t.trainer_image, t.trainer_about_me, t.years_of_exp, s.specialization_name
                FROM trainer t JOIN specialization s ON t.trainer_id = s.trainer_trainer_id WHERE t.trainer_id = ?
        `

        db.query(query, [id], (err, result) => {
            if(err){
                console.log(err);
              }
              res.send(result);
        })


        
    } catch (error) {
        console.log(error)
    }
});


module.exports = router;