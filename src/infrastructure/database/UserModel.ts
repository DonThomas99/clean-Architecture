import mongoose,{Document,Schema} from "mongoose"

interface User extends Document{
    name : string, 
    email:string, 
    password:string
}
const userSchema : Schema<User> = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const UserModel = mongoose.model<User>('user',userSchema)
export {UserModel}