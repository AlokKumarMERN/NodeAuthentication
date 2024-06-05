import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URL);

const DB = mongoose.connection;

DB.on('open',()=>console.log("DB connected succesfully"))
DB.on('error',(err)=>console.log("Error occure",err))

export default DB;


