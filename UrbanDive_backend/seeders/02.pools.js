const models = require ("../models");
const Pool =models.Pool;
const faker = require('faker');

Pool.create({
    name: "Treasure Quest",
    totalUsers: 14,
    normalUsers: 3,
    deluxeUsers: 6
})
  .then((pool) => {
   console.log('Pool created !', pool);
  })
  .catch((err) => console.log(err));

// for(let i = 1; i < 3; i++){
//   Pool.create({
//       name: faker.name.title,
//       totalUsers: faker.random.number,
//       normalUsers: faker.random.number,
//       deluxeUsers: faker.random.number
//   })
//     .then((pool) => {
//      // console.log('Pool created !', pool);
//     })
//     .catch((err) => console.log(err));
// }
