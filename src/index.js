import 'dotenv/config'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import {app} from './app.js'


connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log(error)
            throw error
        })

        app.listen(process.env.PORT || 8000, () => { console.log(`Sever is running on port: ${process.env.PORT}`) }
        )

    })
    .catch((err) => { console.log(err) })








// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//     } catch (error) {
//         console.error;
//         throw error;
//     }
// })()
