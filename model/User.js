import mongoose from 'mongoose';
import moment from 'moment'

const UserSchema = new mongoose.Schema({
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
    department:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },
    mac_address:{
        type:String,
    },
    clock_out:{
        type:Date,
    },
    admin:{
        type:Boolean,
        default:false
    },
    date:{
        type:String,
        // default:moment().format('YYYY-MM-DD')
    }
});

const User = mongoose.model("user", UserSchema);
export default User;
