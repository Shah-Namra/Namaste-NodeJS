const { MongoClient } = require('mongodb');
require('dotenv').config();

// Connection URL
const url = process.env.MONGO_URL;

const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully ');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // the following code examples can be pasted here...

  // create
  const data = {
        firstname: "Deepika",
        lastname: "Padukone",
        city: "Bangalore",
        phoneNumber: "987543211",
    };

  // insert
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);


  // read
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  
  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User collection =>", countResult);

  // Find all documents with a filter of firstname: Deepika

  const result = await collection.countDocuments({ firstname: "Ranveer" });
  console.log("Result => ", result);
  

  return 'done.';
}

main() // returns promise 
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

