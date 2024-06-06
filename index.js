import mongoose from "mongoose";
// import DB_NAME  from "./constants";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env",
});
const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.log("MONGO db connection failed !!! ", err);
    });


// ( async () =>
// {
//     try {
//         await mongoose.connect( `${ process.env.MONGOURL }/${ DB_NAME }` );
//         app.on( "error", ( error ) =>
//         {
//             console.log( "Error:-", error );
//             throw error
//         } )
        
// app.listen( process.env.PORT, () =>
// {
//     console.log( `Server is running on port ${ process.env.PORT }`)
// })
//     } catch (error) {
//         console.log("ERROR : -",error)
//     }
// })();
