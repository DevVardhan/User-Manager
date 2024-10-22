import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './database/connect.js'
import UserRoutes from './routes/userRoute.js'
import alluserRoutes from './routes/allUsersRoute.js'
import cors from 'cors'
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/users' ,UserRoutes );
app.use('/api/allUsers' ,alluserRoutes );

app.get("/" , async(req , res )=>{
    res.send("Connected to database")
})

const startServer = () =>{
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(5000 , ()=>{
            console.log("Server Started listening at PORT:5000")
        })
    }catch(err){
        console.log(err);
    }
}

startServer();