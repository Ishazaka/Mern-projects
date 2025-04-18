import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


export const connectDB = async () => {
try {
    const con = await  mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected : ${con.connection.host}`)
} catch (error) {
    console.log(error.message)
    process.exit(1)
}


} 