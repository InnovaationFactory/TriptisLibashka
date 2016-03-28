(function (controller) {
    controller.init = function (app) {
        var user = require('./user');
        app.get('/api/users/:username?', user.getUserDetails);
        app.post('/api/users', user.addUser);
    };
})(module.exports);