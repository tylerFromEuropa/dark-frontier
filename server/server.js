const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, response) => {
    response.json("Space, the dark frontier...");
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
