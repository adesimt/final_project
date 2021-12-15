const express = require('express');
const { trainerSignUp, login } = require('../controllers/auth');
const router = express.Router();
const { requireAuth, checkUser } = require('../controllers/authCheck');
const { createClass } = require('../controllers/class');





/* register or post a trainer */
router.post('/signup-as-a-trainer', trainerSignUp);

/* login */
router.post('/login', login);

//check auhtenticated user
router.get('/auth/trainer-dashboard', checkUser);
router.get('/auth/trainer-dashboard/classes');
router.post('/auth/trainer-dashboard/:id/create-a-class', createClass);


module.exports = router;