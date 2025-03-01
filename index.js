const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 6001;
const bodyParser = require('body-parser');
const hackathonRoute = require('./routes/hackathons.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Express 4.0
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Routes
app.use('/api/hackathons', hackathonRoute);

app.get('/', (req, res) => {
    res.status(200).send('Hello from the Decentracode Server');
});



mongoose.connect(`${process.env.MONGO_URI}`)
.then(() => {
    console.log('Database Connected Successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch(err => console.log(err));