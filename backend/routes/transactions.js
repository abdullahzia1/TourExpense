const express = require("express");

const { getAllTransactions } = require("../controllers/transactions");

const Router = express.Router();

Router.get("/", getAllTransactions);

module.exports = Router;
