const knex = require('../../knex');

const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  if (req.cookies.token) {

  } else if (req.cookies.userId) {
    const userId = req.cookies.userId
    knex('users').where('id', userId).then(arr => {
      const name = arr[0].name
      res.cookie('userId', userId, {
        httpOnly: true,
        expiresIn: new Date(Date.now() + 3600000 * 24 * 120),
        secure: router.get('env') === 'Production',
      }).send({ userId, name, logged: false })
    })
  } else {
    const name = 'RandomlyGeneratedName'
    knex('users').insert({ name, hash_pw: null }, '*').then(arr => {
      const userId = arr[0].id
      res.cookie('userId', userId, {
        httpOnly: true,
        expiresIn: new Date(Date.now() + 3600000 * 24 * 120),
        secure: router.get('env') === 'Production',
      }).send({userId, name, logged: false})
    })
  }
})

module.exports = router;
