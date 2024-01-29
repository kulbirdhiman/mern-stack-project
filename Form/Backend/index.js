// Importing necessary modules
import express from 'express';
import cors from 'cors';
import connectDb from './Db/connectDb.js'; // Adjust the path as per your project structure
import userRoutes from './routes/userRoutes.js'; // Adjust the path as per your project structure

// Create an Express application
const app = express();

// Middleware setup
app.use(express.json());
// app.use(cors());

// Define the port
const port = 5000; // Use uppercase for 'PORT'

// Mount routes
app.use('/api', userRoutes);

// Connect to the database
connectDb("mongodb://localhost:27017/movies"); // Adjust the connection string as per your MongoDB setup

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
