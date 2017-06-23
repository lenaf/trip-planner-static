const db = require('./db');
const Activity = require('./activity');
const Hotel = require('./hotel');
const Place = require('./place');
const Restaurant = require('./restaurant');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
    db: db,
    Activity: Activity,
    Hotel: Hotel,
    Place: Place,
    Restaurant: Restaurant
};