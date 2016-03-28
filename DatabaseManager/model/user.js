 var mongoose = require('mongoose'),
     schema = mongoose.Schema,
     userSchema = new schema({
         _id: {
             type: Number,
             default: 1000
         },
         FirstName: {
             type: String,
             required: true
         },
         LastName: {
             type: String,
             required: true
         },
         UserName: {
             type: String,
             required: true
         },
         Password: {
             type: String,
             required: true
         },
         Organization: {
             type: String,
             required: true
         },
         Roles: [{
             type: Number,
             required: true,
             ref: 'RoleModel'
        }],
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
 module.exports = mongoose.model('UserModel', userSchema, 'TblUserAccount');