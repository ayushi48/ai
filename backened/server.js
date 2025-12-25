// const express = require("express");
// // const dotenv = require("dotenv");
// require("dotenv").config(); 
// const cors = require("cors");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const cookieParser = require("cookie-parser");

// // dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());

// connectDB();

// app.use("/api/auth", authRoutes);
// app.use("/api/chats", chatRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));




const express = require("express");
require("dotenv").config(); 
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ CORS fix
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies to be sent
  })
);

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
