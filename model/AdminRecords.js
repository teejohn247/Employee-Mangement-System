import mongoose from 'mongoose';

const AdminRecordsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    user_id:{
       type:String,
       required:true
    },
    avatar:{
        type:String,
        required:true
    },
    mac_address:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    clock_out:{
        type:Date,
    },
    date:{
        type: String,
        required:true
    },
    clock_in_time:{
        type: String,
    },
    clock_out_time:{
        type: String,
    }
});

const AdminRecords = mongoose.model("adminrecords", AdminRecordsSchema);
export default AdminRecords;
