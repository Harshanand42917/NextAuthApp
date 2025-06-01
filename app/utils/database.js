import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harshanand42917:zsxHAOFJbyj3VJeH@cluster0.frbpzrt.mongodb.net/",
      {
        dbName: "NextJS_Authenticator",
      }
    );
    console.log("MongoDB Connected Sucessfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
