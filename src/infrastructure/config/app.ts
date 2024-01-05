import  express from "express";
import userRoute from "../route/userRoute";
export const createServer = ()=>{
    try {
        const app = express()
        app.use(express.json());
        app.use(userRoute)
        return app
    } catch (error) {
        console.log(error);
        
    }
}