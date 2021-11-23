const express = require('express');
const { clientSignUp } = require('../../controllers/auth');
const router = express.Router();





router.post('/signup-as-a-client', clientSignUp);


module.exports = router;
