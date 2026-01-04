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

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});