require('mongodb')

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://yashikanandhu:tpRMXkrx3Y5azaJN@node.izluu.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'MongoNode';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  //create a data
  const data = {
    firstName : "Nandhitha",
    lastName : "Ulaganathan",
    city : "Jolarpet",
    phoneNumber : "7708129297"
  }

//   const insertResult = await collection.insertMany([data]);
//   console.log('Inserted documents =>', insertResult);
 
//Find all documents
//   const findResult = await collection.find({}).toArray();
// console.log('Found documents =>', findResult);

//find one document

// const result = await collection.find({firstName:"Nandhitha"}).toArray();
// console.log('Found documents =>', result);

const result = await collection.countDocuments({ firstName: "Nandhitha" });
console.log('Found documents =>', result);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
