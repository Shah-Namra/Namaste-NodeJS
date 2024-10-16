# Episode 13:

### MongoDB Setup

- **Cluster**: Created M0 Cluster.
- **Connection String**: Copied from MongoDB cluster.
- **MongoDB Compass**:
    - Opened Compass → Add New Connection → Pasted connection string.
    - Created a database and added data.

---

### MongoDB Features

- MongoDB creates its own `userId` when not provided.

---

### Connecting Node.js with MongoDB

- **MongoDB NPM Package**: Install the MongoDB driver.
    
    ```
    npm i mongodb
    ```
    
- **Environment Setup**: Store the connection string in a `.env` file for security.
    
    ```
    MONGO_URL="your-mongodb-connection-string"
    ```
    
- **MongoClient Setup**:
    
    ```
    require('dotenv').config();
    const { MongoClient } = require('mongodb');
    const url = process.env.MONGO_URL;
    const client = new MongoClient(url);
    const dbName = 'HelloWorld';
    ```
    
- **Connecting to MongoDB**:
    
    ```
    async function main() {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('user');
      return 'done.';
    }
    
    main()
      .then(console.log)
      .catch(console.error)
      .finally(() => client.close());
    ```
    
- **Run the script**:
    
    ```
    node database.js
    ```
    

---

### CRUD Operations

- **Read Documents**:
    
    ```
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    ```
    
- **Create New Data**:
    
    ```
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      city: 'Berlin',
      phoneNumber: '0987654321'
    };
    ```
    
- **Insert Documents**:
    
    ```
    const insertResult = await collection.insertMany([data]);
    console.log('Inserted documents =>', insertResult);
    ```
---

### Reference

- Official MongoDB Node.js Documentation: [MongoDB Native Node Driver](https://mongodb.github.io/node-mongodb-native/6.8/)