 var mongoose = require('mongoose'),
     schema = mongoose.Schema,
     productSchema = new schema({
         Name: {
             type: String,
             required: true
         },
         Category: {
             type: schema.Types.ObjectId,
             ref: 'ProductCategoryModel',
             required: true
         },
         ImageUrl: {
             type: String,
             required: true
         },
         DisplayAsNew: {
             type: Boolean,
             required: true,
             default: true
         },
         currency: {
             type: String,
             required: true
         },
         price: {
             type: Number,
             required: true
         },
         oldPrice: {
             type: Number
         },
         comment: {
             type: String
         },
         rating: {
             type: Number,
             required: true,
             default: 5
         },
         IsActive: {
             type: Boolean,
             required: true,
             default: true
         },
         CreatedDate: {
             type: Date,
             default: Date.now
         },
         CreatedBy: {
             type: String,
             default: 'Admin'
         },
         ModifiedDate: {
             type: Date,
             default: Date.now
         },
         ModifiedBy: {
             type: String,
             default: 'Admin'
         }
     });
 module.exports = mongoose.model('ProductModel', productSchema, 'TblProduct');