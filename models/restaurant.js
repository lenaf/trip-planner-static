const db = require('./db')
const Sequelize = require('sequelize');

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
            max: 5,
            min: 1
        }
    },
    cuisine: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue: [],
        set: function(cuisine) {
            cuisine = cuisine || [];
            if (typeof cuisine === 'string') {
                cuisine = cuisine.split(',').map(function(str) {
                    return str.trim();
                });
            }
            this.setDataValue('cuisine', cuisine);
        }
    }
}, {
    getterMethods: {}
})

module.exports = Restaurant;