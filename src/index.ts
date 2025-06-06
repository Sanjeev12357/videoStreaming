import express, { Express,Request, Response } from "express";
import apiRouter from "./routes";

const app:Express=express();



app.use('/api',apiRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})