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
  const updatedUser = await Users.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedUser);
});

app.delete("/users/:id", async (request, response) => {
  const deletedUser = await Users.findByIdAndDelete(request.params.id);
  response.json(deletedUser);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
