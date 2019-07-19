const models = require ("../models");
const User =models.User;
const faker = require('faker');

User.create({
pseudo: "Jojo",
ticket: true,
message: "a very cool quest",
vote: 5,
photo: true,
nbPhoto: 3,
idPool: 2
})
  .then((user) => {
   console.log('User created !', user);
  })
  .catch((err) => console.log(err));

// for(let i = 1; i < 12; i++){
//   User.create({
//     pseudo: faker.internet.userName,
//     ticket: true,
//     message: "a very cool quest",
//     vote: faker.random.number,
//     photo: true,
//     nbPhoto: faker.random.number,
//     poolId: faker.random.number
//   })
//     .then((user) => {
//      // console.log('User created !', user);
//     })
//     .catch((err) => console.log(err));
// }
