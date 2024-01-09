const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=> {
    res.send('Hello World!')
})

//mongodb configuration
//==========================================================


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://demo-book:admin123@cluster0.q3dzisr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const books = client.db("BookInventroy").collection("books");
    
    // insert a book to db
    app.post("/upload-book",async(req, res) => {
        const data = req.body;
        const result = await books.insertOne(data);
        res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



//==========================================================
app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`)
})