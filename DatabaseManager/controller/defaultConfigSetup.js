(function (defaultSetup) {
    var data = require('../data'),
        config = require('../config'),
        tableName = 'productCategory';

    var getCategoryRequestObj = function (name, category, parentCategory) {
        return request = {
            table: tableName,
            model: {
                Name: name,
                Category: category,
                ParentCategory: parentCategory,
                IsActive: true
            }
        };
    }

    var createCategory = function (category) {
        var categoryName = Object.keys(category)[0];
        var request = getCategoryRequestObj(categoryName, categoryName, null)
        data.create(request, function (err, response) {
            console.log(err || response);
            if (!err) {
                createSubCategory(category[categoryName], response);
            }
        });
    }

    var createSubCategory = function (subCategory, ParentId) {
        if (typeof subCategory == "object") {
            Object.keys(subCategory).forEach(function (key) {
                var request = getCategoryRequestObj(key, key, ParentId)
                data.create(request, function (err, response) {
                    console.log(err || response);
                    if (!err) {
                        createSubCategory(subCategory[key], response);
                    }
                });
            });
        }
    }

    defaultSetup.insertDefaultCategories = function () {
        var request = getCategoryRequestObj();
        request.query = {};
        data.read(request, function (err, response) {
            if (!err && response.length <= 0) {
                var categories = config.Categories;
                categories.forEach(function (category) {
                    createCategory(category);
                });
            } else {
                console.log(err || "Product Categories table already created!");
            }
        });
    }
})(module.exports);