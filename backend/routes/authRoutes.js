const express = require('express');
const { trainerSignUp, login } = require('../controllers/auth');
const router = express.Router();




/* register or post a trainer */
router.post('/signup-as-a-trainer', trainerSignUp);

/* login */
router.post('/login', login);


module.exports = router;