'use server'
import mongoose from 'mongoose'


const connectToDb = async () => {
    const connection = {};
    try {
        if (connection.isConnected) {
            console.log('DB sucessfully connected');
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export default connectToDb
