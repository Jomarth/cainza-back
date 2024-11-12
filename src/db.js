import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/cainza');
        console.log("base de datos conectada");
    } catch (error) {
        console.error(error);
    }
}