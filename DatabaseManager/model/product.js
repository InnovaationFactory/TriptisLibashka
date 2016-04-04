 var mongoose = require('mongoose'),
     schema = mongoose.Schema,
     productSchema = new schema({
         _id: {
             type: Number,
             default: 1000
         },
         Name: {
             type: String,
             required: true
         },
         Category: {
             type: String,
             required: true
         },
         ImageUrl: {
             type: String,
             required: true
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