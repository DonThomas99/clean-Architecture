import {createServer} from './infrastructure/config/app'
import { connectDb } from './infrastructure/config/connectedDb'

const startServer = async () =>{
    try {
        await connectDb()
        
        const app  = createServer()
        app?.listen(3000,()=>{
            console.log('connected to the server');
        })
        
    }
    catch(error){
        console.log(error);
        
    }
}

startServer()