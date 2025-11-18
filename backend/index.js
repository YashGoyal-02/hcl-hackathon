import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js';
// import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from "cors"
dotenv.config();
const app = express();
app.use(express.json()); // setting up a middleware to the req. from the body
app.use(cookieParser());
connectdb();
// app.use("/api/auth" , authRouter);

const port = process.env.PORT
// app.use(cors({ // here we need two things one is origin (frontend url) , credentials
//     origin :  "http://localhost:5173",
//     credentials : true
// }));

// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

app.listen(port,()=>{ // listen server through http server.
    connectdb();
    console.log("server started");
})



