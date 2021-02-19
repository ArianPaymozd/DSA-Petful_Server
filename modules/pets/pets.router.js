const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')
const { dequeue } = require('./pets.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.status(200)
  .send(Pets.get())
  .end()
})

router.delete('/', json, (req, res) => {
  const {type} = req.body
  const pet = Pets.dequeue(type)
  console.log(Pets.get())
  res.send(pet).end()
})

module.exports = router
