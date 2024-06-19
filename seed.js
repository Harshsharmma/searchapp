const mongoose = require('mongoose');
require('dotenv').config();
const Item = require('./models/Item');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Sample data to be inserted
const items = [
    { name: "Apple", description: "A juicy red fruit." },
    { name: "Banana", description: "A long yellow fruit." },
    { name: "Cherry", description: "A small, round, and red fruit." },
    { name: "Date", description: "A sweet brown fruit often dried." },
    { name: "Elderberry", description: "A small dark purple fruit." }
];

// Seed function to insert data
const seedDB = async () => {
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log("Database seeded!");
    mongoose.connection.close();
};

// Run the seed function
seedDB().catch(err => {
    console.error("Error seeding the database:", err);
    mongoose.connection.close();
});
