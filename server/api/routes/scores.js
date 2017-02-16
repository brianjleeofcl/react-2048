const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ user_name: 'Sample Player', score:1234 })
})

module.exports = router;
