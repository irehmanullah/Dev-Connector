/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const connectDB = require("./config/db");
require("dotenv/config");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

// connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const SERVERPORT = process.env.SERVERPORT || 5000;

app.listen(SERVERPORT, () =>
  console.log(`Server is running on port ${SERVERPORT}`)
);

// exports.api = onRequest(app);
