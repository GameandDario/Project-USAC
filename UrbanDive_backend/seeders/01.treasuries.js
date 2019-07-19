const models = require ("../models");
const Treasury =models.Treasury;
const faker = require('faker');

Treasury.create({
    totalNormalTickets: 4,
    totalDeluxeTickets: 34,
    photos: 234,
    meals: 127,
    drinks: 567,
    totalCash: 23234
})
.then((Treasury) => {
 console.log('Treasury created !', Treasury);
})
.catch((err) => console.log(err));

Treasury.create({
    totalNormalTickets: 2,
    totalDeluxeTickets: 3,
    photos: 234,
    meals: 17,
    drinks: 67,
    totalCash: 2934
})
.then((Treasury) => {
 console.log('Treasury created !', Treasury);
})
.catch((err) => console.log(err));
