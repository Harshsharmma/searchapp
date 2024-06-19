const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Routes
const searchRouter = require('./routes/search');
app.use('/search', searchRouter);

app.use(express.static(path.join(__dirname, 'client', 'dist')));

// The catch-all handler: for any request that doesn't match one above, send back index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
