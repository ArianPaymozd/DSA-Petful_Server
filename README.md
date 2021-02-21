# Petful Server

Client Project: https://github.com/ArianPaymozd/DSA-Petful-Client

play with the live app at https://dsa-petful.vercel.app/

Here at petful we have a first in first out or FIFO philosophy when it comes to pet adoption. Future pet parents can enter a queue to adopt either a dog or cat. Only the first pet in line can be adopted at any time, meaning you only have one option for each pet! Go to the adoption page and enter the queue to take home your new best friend as soon as possible!

# Documentation

GET POEPLE: 
fetch(https://dsa-petful-backend.herokuapp.com/people)

returns an array of people in line


POST PEOPLE: 
fetch(https://dsa-petful-backend.herokuapp.com/people, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        person: newPerson (persons name)
    })
})

posts new person to back of queue, returns nothing


DELETE PEOPLE: 
fetch(https://dsa-petful-backend.herokuapp.com/people, {
    method: 'DELETE',
})

deletes person from front of queue returns person deleted person


GET PETS: 
fetch(https://dsa-petful-backend.herokuapp.com/pets)

returns an array with 2 sub arrays, cats array then dogs array, [[cats], [dogs]]


DELETE PETS: 
fetch(https://dsa-petful-backend.herokuapp.com/pets, {
    method: 'DELETE',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        type: 'dog' or 'cat'
    })
})

deletes pet from front of queue depending on type, returns an array with the deleted pet and the new first pet in line, [deleted, next pet]

the tech stach for this API includes Node.js and Express




