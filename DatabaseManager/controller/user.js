(function (user) {
    var data = require('../data');

    user.getUserDetails = function (req, res) {
        var request = {};
        request.table = 'user';
        request.query = {
            IsActive: true
        };
        var username = req.params.username;
        if (username) {
            request.query = {
                $and: [{
                    UserName: username
                    }, {
                    IsActive: true
                    }]

            };
        }
        data.read(request, function (err, response) {
            var result = {
                isError: false,
                error: null,
                data: {}
            };
            if (err) {
                result.isError = true;
                result.error = err;
                result.data = null;
                res.json(result);
                return;
            }
            fillRoles(response, 0, [], function (userWithRoles) {
                result.data = userWithRoles;
                res.json(result);
            });
        });
    };
    user.addUser = function (req, res) {
        var request = {
            table: 'user',
            model: req.body
        };

        data.create(request, function (err, response) {
            var result = {
                isError: false,
                error: null,
                data: response
            };
            if (err) {
                result.isError = true;
                result.error = err;
                result.data = null;
            }
            res.json(result);
        });
    };

})(module.exports);