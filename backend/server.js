const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionsRoutes = require("./routes/transactions");

const app = express();

const PORT = process.env.PORT || 5001;
console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("API is Running"));
app.use("/api/transactions", transactionsRoutes);

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} port on ${PORT}`)
);
