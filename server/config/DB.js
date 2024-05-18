import mongoose from "mongoose";


const dbConnection= async ()=>{
    try {
       await mongoose.connect(process.env.DATABASE_URI);
       console.log('database connect sucessfully');
    } catch (error) {
        console.log('erorr from database', error.message);
    }
}

export default dbConnection;