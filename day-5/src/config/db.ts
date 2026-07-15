import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Connect db Successfully')
    }catch{
        console.log('db not connected successfully')
    }
}

export default connectDB;
