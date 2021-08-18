const schema_mongoose = require('mongoose');

const EmployeeSchema = schema_mongoose.Schema(
    {
    empname: { type: String },
    empemail: { type: String },
    empmobile: { type: String },
    empdob: { type: String },
    emppass: { type: String },
    empgender: { type: String },
    empcountry: { type: String },
    empaddress: { type: String },
	regdatetime: { type: Date, default: Date.now }
    }, 
    {
       timestamps: true
    }
    );

module.exports = schema_mongoose.model('emp_schema_collection', EmployeeSchema);