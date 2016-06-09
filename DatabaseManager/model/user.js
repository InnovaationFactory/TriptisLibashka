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
         Gender: {
             type: String,
             required: true
         },
         Contact: {
             type: String,
             required: true
         },
         AlternateContact: {
             type: String
         },
         Email: {
             type: String,
             required: true
         },
         Roles: [{
             type: Number
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
             default: 'Tripti'
         },
         ModifiedDate: {
             type: Date,
             default: Date.now
         },
         ModifiedBy: {
             type: String,
             default: 'Tripti'
         }
     });
 module.exports = mongoose.model('UserModel', userSchema, 'TblUserAccount');