import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package
import { route } from './routes/route.js';

const app = express();

// Use cors middleware
app.use(cors());

mongoose.connect('mongodb://localhost:27017/shorturl')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

app.use(express.json());
route(app);

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});
