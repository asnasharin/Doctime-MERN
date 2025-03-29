import mongoose from "mongoose"


const connectDb = async (config: any) => {
    try {
        await mongoose.connect(config.mongo.uri)
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;