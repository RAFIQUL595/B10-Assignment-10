const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Driver
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q4vm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const reviewCollection = client.db("reviewDB").collection("review");
    const watchlistCollection = client.db("reviewDB").collection("watchlist");

    // Route to get the top 6 highest-rated games
    app.get("/reviews/limit", async (req, res) => {
      const cursor = reviewCollection.find().sort({ rating: -1 }).limit(6);
      const result = await cursor.toArray();
      res.send(result);
    });

    // All Reviews Read
    app.get("/reviews", async (req, res) => {
      const cursor = reviewCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // My Reviews
    app.get("/myReviews", async (req, res) => {
      const { email } = req.query;
      const allReview = await reviewCollection.find().toArray();
      const filteredReview = allReview.filter((i) => i.email === email);
      res.send(filteredReview);
    });

    // My Reviews Get the data by id
    app.get("/myReviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });

    // Delete Form My Reviews
    app.delete("/myReviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.deleteOne(query);
      res.send(result);
    });

    // Read data one in Server site and Client site
    app.get("/reviews/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await reviewCollection.findOne(query);
      res.send(result);
    });

    // Create Reviews
    app.post("/reviews", async (req, res) => {
      const newReview = req.body;
      const result = await reviewCollection.insertOne(newReview);
      res.send(result);
    });

    // Watchlist Post
    app.post("/watchlist", async (req, res) => {
      const newWatchlist = req.body;
      const result = await watchlistCollection.insertOne(newWatchlist);
      res.send(result);
    });

    // All Watchlist Read
    app.get("/watchlist", async (req, res) => {
      const cursor = watchlistCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Read data one in Server site and Client site
    app.get("/watchlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await watchlistCollection.findOne(query);
      res.send(result);
    });

    // Delete Form WatchList
    app.delete("/watchlist/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await watchlistCollection.deleteOne(query);
      res.send(result);
    });

    // Update Review
    app.put("/updateReview/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateReview = req.body;
      const option = { upsert: true };
      const review = {
        $set: {
          userName: updateReview.userName,
          userEmail: updateReview.userEmail,
          gameCover: updateReview.gameCover,
          gameTitle: updateReview.gameTitle,
          rating: updateReview.rating,
          publishingYear: updateReview.publishingYear,
          genre: updateReview.genre,
          reviewDescription: updateReview.reviewDescription,
        },
      };
      const result = await reviewCollection.updateOne(filter, review, option);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Chill Gamer-Review-Server");
});

app.listen(port);
