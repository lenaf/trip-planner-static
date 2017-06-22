const db = require('../db')
const Sequelize = require('sequelize');

const Place = db.define('place', {
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    city: {
        type: Sequalize.TEXT,
        allowNull: false
    },
    state: {
        type: Sequalize.TEXT,
        allowNull: false
    },
    phone: {
        type: Sequalize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false
    }
}, {
    getterMethods: {}
})