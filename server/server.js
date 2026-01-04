// backend/server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // Import database connection
const chatRoutes = require("./routes/chatRoutes"); // Import chat routes

// 1. Load Environment Variables
dotenv.config();

// 2. Connect to MongoDB
// This will look for MONGO_URI in your .env file
connectDB();

// 3. Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// 4. Middleware
app.use(cors()); // Enable CORS to allow requests from your React Frontend
app.use(express.json()); // Parse incoming JSON requests

// 5. API Routes
// Route for the AI Chatbot
app.use("/api/chat", chatRoutes);

// (Optional) Placeholder for Project Routes if you build a controller for them later
// app.use("/api/projects", projectRoutes); 

// 6. Base Route (Health Check)
app.get("/", (req, res) => {
  res.send("API is running... Backend is connected!");
});

// 7. Start the Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});