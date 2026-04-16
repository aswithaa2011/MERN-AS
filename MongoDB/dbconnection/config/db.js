import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected ${connect.connection.host}`);
  } catch (e) {
    console.log("error", e);
    process.exit(1);
  }
};

export default connectdb;