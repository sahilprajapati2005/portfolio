// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chatRoutes = require("./routes/chatRoutes");

dotenv.config();

// REMOVED: const connectDB = require("./config/db");
// REMOVED: connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "http://localhost:5173",       
    "https://sahilportfolio-nine.vercel.app",        // Allows your local Vite app
    "https://sahilprajapatiportfolio.vercel.app/",   // <--- REPLACE THIS with your actual Netlify URL
    // Add any other frontend URLs you have here
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;