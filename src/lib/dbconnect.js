import mongoose from "mongoose";

const connection={}
const DbConnect=async()=>{
     if(connection.isConnected){
            console.log("Already connect to Database")
            return;
        }
    try {
       
       const db=await mongoose.connect(process.env.MONGODB_URL)
       connection.isConnected=db.connections[0].readyState;
       console.log("DB connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}
export default DbConnect;