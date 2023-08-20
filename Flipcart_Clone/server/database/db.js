import mongoose from "mongoose";

export const Connection = async(username, password) =>{
    // password = encodeURIComponent("<password>");
    // const URL = `mongodb+srv://${username}:${password}@cluster0.xd5oykv.mongodb.net/?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0.xd5oykv.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useunifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected Successfully")
    } catch(error){
        console.log("Error while connecting the database:", error.message);
    }
}

export default Connection;