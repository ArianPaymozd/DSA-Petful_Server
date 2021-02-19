const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send(People.get()).end()
})

router.post('/', json, (req, res) => {
  const {person} = req.body
  People.enqueue(person)
  res.status(201)
  .end()
})

router.delete('/', json, (req, res) => {
  const person = People.dequeue()
  console.log(People.get())
  res.send(person).end()
})

module.exports = router
