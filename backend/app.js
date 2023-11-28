const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Villa = require("./models/villa.model");
const bcrypt = require("bcrypt");

const mongouri = "mongodb://localhost:27017/villa-store";
// app service
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World, from cs309");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    // req id
    const id = req.params.id;
    // find by id in users
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
});

// Assignment => write route to get user by email ????

app.get("/users/email/:email", async (req, res) => {
  try {
    const { email } = req.params;

    // Find the user by email in your database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(402).json({ message: "Internal Server Error" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Attempt to find and delete the user by ID
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: `Cannot find any user with ID ${id}` });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const userParam = req.body;

    // Check if the email is already in use
    if (await User.findOne({ email: userParam.email })) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Hash the user's password before saving it
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userParam.password, saltRounds);

    // Create a new User instance with the hashed password and 'fullName'
    const user = new User({
      fullName: userParam.fullName, // Make sure 'fullName' is provided
      name: userParam.name,
      phone: userParam.phone,
      email: userParam.email,
      password: hashedPassword,
      seller: userParam.seller,
      buyer: userParam.buyer,
      image: userParam.image,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }
});

// Assignment => add new route here to edit user info ???
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.status(200).json(users[index]);
  } else {
    res.status(404).send("User not found");
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

app.get("/villas", async (req, res) => {
  try {
    const villas = await Villa.find({});
    res.status(200).json(villas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/villa-store")
  .then(() => {
    console.log("connected to MongoDB");
    //listen on specific port
    app.listen(5000, () => console.log("app started on port 5000"));
  })
  .catch((error) => {
    console.log("cant connect to mongodb" + error);
  });
