const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PaySheetEmployeeSchema = new Schema({
    name: {type: String, required: true, max: 100},
    document: {type: String, required: true},
    salary:{type:Number,required:true},
    phone : {type:String,required:true},
    email:{type:String,required:true},
    contractType:{type:String,required:true,max:2},
    period:{type:String,required:true},
    

});


// Export the model
module.exports = mongoose.model('Nomina', PaySheetEmployeeSchema);