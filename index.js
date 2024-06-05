const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const itemModel = require('./models/items');
require('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors());

// const mongoURI = 'mongodb+srv://rajdhiman469:sOkKdSeM9eOVkF0s@pageturner.hit7rsq.mongodb.net/pageturner?retryWrites=true&w=majority';
const mongoURI = process.env.DB_URL;
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.get("/getInfo", (req, res) => {
    itemModel.find()
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        console.error("Database error:", err);
        res.status(500).json(err);
    });
});

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

app.listen(3000, () => {
    console.log("App is running");
});
