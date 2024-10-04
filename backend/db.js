import mongoose from 'mongoose'
const mongoUrl= 'mongodb://localhost:27017/';
const dbName= 'JamInn5';


async function connectToMongo() {
    try{
            mongoose.connect(mongoUrl+dbName,{});
            console.log('Connected to MongoDB successfully!');
    }
    catch(error){
             console.error('Error connecting to MongoDB:', error);
    }
}

export default connectToMongo