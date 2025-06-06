console.log('Starting nodeapp server...');
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3030;

app.use(cors());
app.use(require("body-parser").urlencoded({ extended: false }));

const reviews_data = JSON.parse(fs.readFileSync("reviews.json", "utf8"));
const dealerships_data = JSON.parse(
    fs.readFileSync("dealerships.json", "utf8")
);

console.log('ِConnecting to the database');

// mongoose.connect("mongodb://mongo_db:27017/", {
//     dbName: "dealershipsDB",
//     serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds 
// });
mongoose.connect("mongodb://mongo-db:27017/", {
    dbName: "dealershipsDB",
    serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds 
});

// Add these event listeners to check the connection status
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

const Reviews = require("./review");

const Dealerships = require("./dealership");

try {
    Reviews.deleteMany({}).then(() => {
        Reviews.insertMany(reviews_data["reviews"]);
    });
    Dealerships.deleteMany({}).then(() => {
        Dealerships.insertMany(dealerships_data["dealerships"]);
    });
} catch (error) {
    res.status(500).json({ error: "Error fetching documents" });
}

// Express route to home
app.get("/", async (req, res) => {
    res.send("Welcome to the Mongoose API");
});

// Express route to fetch all reviews
app.get("/fetchReviews", async (req, res) => {
    try {
        const documents = await Reviews.find();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: "Error fetching documents" });
    }
});

// Express route to fetch reviews by a particular dealer
app.get("/fetchReviews/dealer/:id", async (req, res) => {
    try {
        const documents = await Reviews.find({ dealership: req.params.id });
        res.json(documents);
    } catch (error) {
        res.status(500).json({ error: "Error fetching documents" });
    }
});

// Express route to fetch all dealerships
app.get("/fetchDealers", async (req, res) => {
    try {
        const dealers_documents = await Dealerships.find();
        res.json(dealers_documents);
    } catch (err) {
        res.status(500).json({
            err: "Something wen wrong on the server side!" + `\nError : ${err}`,
        });
    }
});

// Express route to fetch Dealers by a particular state
app.get("/fetchDealers/:state", async (req, res) => {
    try {
        const dealsers_by_state = await Dealerships.find({
            state: req.params.state,
        });
        res.json(dealsers_by_state);
    } catch (err) {
        res.status(500).json({
            err: "Something wen wrong on the server side!" + `\nError : ${err}`,
        });
    }
});

// Express route to fetch dealer by a particular id
app.get("/fetchDealer/:id", async (req, res) => {
    try {
        const dealsers_by_id = await Dealerships.find({ id: req.params.id });
        res.json(dealsers_by_id);
    } catch (err) {
        res.status(500).json({
            err: "Something wen wrong on the server side!" + `\nError : ${err}`,
        });
    }
});

//Express route to insert review
app.post("/insert_review", express.raw({ type: "*/*" }), async (req, res) => {
    data = JSON.parse(req.body);
    const documents = await Reviews.find().sort({ id: -1 });
    let new_id = documents[0]["id"] + 1;

    const review = new Reviews({
        id: new_id,
        name: data["name"],
        dealership: data["dealership"],
        review: data["review"],
        purchase: data["purchase"],
        purchase_date: data["purchase_date"],
        car_make: data["car_make"],
        car_model: data["car_model"],
        car_year: data["car_year"],
    });

    try {
        const savedReview = await review.save();
        res.json(savedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error inserting review" });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
