import mongoose, { mongo } from "mongoose";

async function connectToDatabase() {
    // mongoose.connect("mongodb+srv://naiaradaros22:Jad220607*@cluster0.govz8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default connectToDatabase;