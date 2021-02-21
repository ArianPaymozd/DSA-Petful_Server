const Queue = require('../queue/Queue')
const store = require('../../store')
const { dogs, cats } = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

cats.forEach(cat => pets.cats.enqueue(cat))
dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    let cats = pets.cats.all()
    let dogs = pets.dogs.all()
    return [cats, dogs]
  },

  dequeue(type) {
    if (type === 'dog') {
      if (pets.dogs.first.next == null) {
        dogs.forEach(dog => pets.dogs.enqueue(dog))
      }
      return pets.dogs.dequeue()
    } else {
      if (pets.cats.first.next == null) {
        cats.forEach(cat => pets.cats.enqueue(cat))
      }
      return pets.cats.dequeue()
    }
  }
}
