const mongoose = require("mongoose");
require("dotenv").config(); // brings dotenv
const User = require("./models/user");

// connecting to database
mongoose.connect(process.env.MONGODB_LINK);

let seed = async () => {
  await User.create([
    {
      userID: "PlayerOne",
      character: {
        name: "Zarnok",
        dex: 5,
        str: 5,
        int: 5,
        cha: 5,
        end: 5,
      },
    },
  ]);

  console.log("User created");
  mongoose.disconnect(); // Disconnect the database at the end as connection is no longer needed
};

seed(); // call the function.
