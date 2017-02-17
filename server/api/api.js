const express = require('express');
const router = express.Router()

router.use('/scores', require('./routes/scores'))
router.use('/users', require('./routes/users'))

module.exports = router;
