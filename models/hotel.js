const db = require('db')
const Sequelize = require('sequelize');

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    num_stars: {
        type: Sequalize.FLOAT,
        allowNull: false
    },
    amenities: {
        type: Sequelize.ARRAY(Sequalize.TEXT),
        defaultValue: [],
        set: function(amenities) {
            amenities = amenities || [];
            if (typeof amenities === 'string') {
                amenities = amenities.split(',').map(function(str) {
                    return str.trim();
                });
            }
            this.setDataValue('amenitites', amenities);
        }
    }
}, {
    getterMethods: {}
});