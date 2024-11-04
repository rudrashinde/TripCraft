
// // server.js

// require('dotenv').config(); // Load environment variables
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt'); // For password hashing
// const User = require('./models/User'); // Import the User model

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // To parse JSON bodies

// // MongoDB connection
// console.log('Database URI:', process.env.DB_URI); // Log DB_URI for debugging
// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Example routes
// app.get('/', (req, res) => {
//     res.send('Welcome to the Travel Itinerary API');
// });

// // Example of a POST route for registration
// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists.' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10); // Hash with 10 rounds

//         // Create a new user
//         const newUser = new User({
//             username,
//             password: hashedPassword,
//         });

//         // Save the user to the database
//         await newUser.save();
//         res.status(201).json({ message: 'User registered successfully!' });
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// });

// // Example of a POST route for login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Find the user by username
//         const user = await User.findOne({ username });

//         if (!user) {
//             return res.status(401).json({ message: 'Invalid username or password.' });
//         }

//         // Compare the provided password with the hashed password in the database
//         const isPasswordValid = await bcrypt.compare(password, user.password);
        
//         if (isPasswordValid) {
//             // Login successful
//             res.status(200).json({ message: 'Login successful!' });
//         } else {
//             // Login failed
//             res.status(401).json({ message: 'Invalid username or password.' });
//         }
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
// backend/server.js
require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing
const User = require('./models/User'); // Import the User model
const fetch = require('node-fetch'); // Import node-fetch for making API calls

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
console.log('Database URI:', process.env.DB_URI); // Log DB_URI for debugging
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Example routes
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Itinerary API');
});

// Travel suggestions route using OpenTripMap API
app.get('/api/travel/suggestions', async (req, res) => {
    const { lat, lon } = req.query; // Receive latitude and longitude as query parameters

    try {
        // Call OpenTripMap API with latitude and longitude
        const response = await fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?lat=${lat}&lon=${lon}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // API key from .env
                'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com',
            },
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data); // Send API response data to the frontend
    } catch (error) {
        console.error('Error fetching travel suggestions:', error);
        res.status(500).json({ message: 'Failed to fetch travel suggestions.' });
    }
});

// Example of a POST route for registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // Hash with 10 rounds

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Example of a POST route for login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (isPasswordValid) {
            // Login successful
            res.status(200).json({ message: 'Login successful!' });
        } else {
            // Login failed
            res.status(401).json({ message: 'Invalid username or password.' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
