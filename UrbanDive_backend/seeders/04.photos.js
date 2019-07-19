const models = require ("../models");
const Photo =models.Photo;
const faker = require('faker');

Photo.create({
  idUser: 34,
})
  .then((photo) => {
   console.log('Photo created !', photo);
  })
  .catch((err) => console.log(err));

// for(let i = 1; i < 12; i++){
//   Photo.create({
//     idUser: faker.random.number
//   })
//     .then((photo) => {
//      // console.log('Photo created !', photo);
//     })
//     .catch((err) => console.log(err));
// }
