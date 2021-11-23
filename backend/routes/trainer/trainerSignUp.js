const express = require('express');
const { trainerSignUp,  } = require('../../controllers/auth');
const router = express.Router();




/* register or post a trainer */
router.post('/signup-as-a-trainer', trainerSignUp);


module.exports = router;