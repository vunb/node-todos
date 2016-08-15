var configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return `mongodb://${configValues.username}:${configValues.password}@ds139705.mlab.com:39705/node-todos`;
    }

}