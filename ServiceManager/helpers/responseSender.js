(function (responseSender) {
    responseSender.sendResponse = function (err, data, res) {
        
        if (err || data.isError) {
            responseSender.sendError(err || data.message, res)
        } else {
            responseSender.sendSucess(data, res)
        }
    };

    responseSender.sendSucess = function (data, res, message, code) {
        code = code || 200;
        var result = {
            isError: false,
            data: data,
            message: message
        };
        if (message && message.statusCode) {
            result.message = message.text;
            result.statusCode = message.statusCode;
        }
        res.status(code).json(result);
    };

    responseSender.sendError = function (err, res, message, errorCode) {
        errorCode = errorCode || 500;
        var result = {
            isError: true,
            error: err,
            message: message
        };
        if (message && message.statusCode) {
            result.message = message.text;
            result.statusCode = message.statusCode;
        }
        res.status(errorCode).json(result);
    };
})(module.exports);