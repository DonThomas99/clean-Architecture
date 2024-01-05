import mongoose from "mongoose"
export const connectDb = async()=>{
    try {
        const mongo_uri = ' mongodb://127.0.0.1:27017/clean'
        await mongoose.connect(mongo_uri)
        console.log('Connected to db');
        
    } catch (error) {
        console.log(error);
        
    }
}