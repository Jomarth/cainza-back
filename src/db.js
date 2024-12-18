import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        const url = process.env.MONGODB;
        await mongoose.connect(url);
        console.log("base de datos conectada");
    } catch (error) {
        console.error(error);
    }
}
