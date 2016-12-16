var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb://${configValues.username}:${configValues.password}@${configValues.hostname}/${configValues.database}`;
    }
}