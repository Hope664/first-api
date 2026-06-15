import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'school';
let db;

async function connectDB() {
    if(!db){
        try {
            await client.connect();
            console.log('db connected');
            db = client.db(dbName);
            const students = db.collection('students');
            const allStudents = await students.find().toArray();
             await students.insertOne({names:'dkfjdk'})
            console.log('student added')
            console.log(allStudents)

            
        } catch (error) {
            console.log(error.message)
            
        }
        
    }
    
}

connectDB()