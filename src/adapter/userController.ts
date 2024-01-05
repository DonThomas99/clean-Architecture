import {Request,Response} from "express"
import Userusecase from "../use_case/userUsecase"

class userController{
    private usercase:Userusecase
    constructor(usercase:Userusecase){
        this.usercase = usercase
    }
    async signIn(req:Request,res:Response){
        try {
const user = await this.usercase.signIn(req.body)
res.status(user.status).json(user.data)            
        } catch (error) {
            console.log(error);
            
        }
    }
}
export default userController