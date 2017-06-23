const db = require('./db')
const Sequelize = require('sequelize');

const Place = db.define('place', {
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    city: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    state: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),

    }
}, {
    getterMethods: {}
})

module.exports = Place;