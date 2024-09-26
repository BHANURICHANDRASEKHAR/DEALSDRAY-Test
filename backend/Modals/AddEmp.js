import mongoose from "mongoose";
const EmpList=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    }
    ,
    number:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    Date:{
        type: Date,
        required: true
    },
    img:{
        type: String,
        required: true
    }
   
})
export default mongoose.model("EmpList",EmpList);