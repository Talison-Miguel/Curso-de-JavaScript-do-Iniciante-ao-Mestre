const app = require('./src/app')
const connectDB = require("./src/db/connect")

const PORT = process.env.PORT || 3000

const url = process.env.MONGO_URL;


// const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const client = new MongoClient(url);

// Database Name
// const dbName = 'myFirstProject';

// async function main() {
//     // Use connect method to connect to the server
//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('documents');

//     // the following code examples can be pasted here...
//     const insertResult = await collection.insertMany([{task: "task 1", completed: false}, {task: "task 1", completed: false}]);
//     console.log('Inserted documents =>', insertResult);

//   return 'done.';
// }

// main()
//     .then(() => {
//         app.listen(PORT)
//     })
//     .catch(console.error)
//     .finally(() => client.close());


const main = async () => {
    try {
        await connectDB(url)
        app.listen(PORT)
    } catch (error) {
        console.log(error)
    }
}

main()
