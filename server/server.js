const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const mongoose = require("mongoose");
const Users = require("./models/user");

mongoose.connect(process.env.MONGODB_LINK);

app.use((req, res, next) => {
  const allowedOrigins = ["http://localhost:5173", "https://dark-frontier.vercel.app"];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.get("/", (_, response) => {
  response.json("These are not the GETs you're looking for.");
});

app.get("/users", async (request, response) => {
  const users = await Users.find(request.query);
  response.json(users);
});

app.post("/users", async (request, response) => {
  const newUser = await Users.create(request.body);
  response.json(newUser);
});

app.put("/users/:id", async (request, response) => {
  // We use the function findOneAndUpdate which makes the myID = whatever param we used (which is the big number) and sets it as the request body to then update the database
  // The { new: true } part simply uses the new data instead of the old data
  const updatedUser = await Users.findOneAndUpdate({ myID: request.params.id }, request.body, { new: true });
  response.json(updatedUser);
});

app.delete("/users/:id", async (request, response) => {
  const deletedUser = await Users.findOneAndDelete({ myID: request.params.id }, { new: true });
  response.json(deletedUser);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
