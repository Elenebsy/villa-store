const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Villa = require("./models/villa.model");
const Seller = require("./models/seller.model");
const Property = require("./models/property.model");
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
      user_id:  userParam.user_id,
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

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// Record and Adding the data of new Seller person
app.post("/addnewseller", async (req,res) => {
  try {
    const sellerparam = req.body;

    // Check if the email is already in use
    if (await Seller.findOne({ email: sellerparam.email })) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    // Hash the user's password before saving it
    const saltRouns = 10;
    const hashedPassword = await bcrypt.hash(sellerparam.password, saltRouns);
    // Create a new User instance with the hashed password and 'fullName'
    const seller = new Seller({
      seller_id:  sellerparam.seller_id,
      fullName: sellerparam.fullName, // Make sure 'fullName' is provided
      name: sellerparam.name,
      phone: sellerparam.phone,
      email: sellerparam.email,
      password: hashedPassword,
      street: sellerparam.street,
      city: sellerparam.city,
      state: sellerparam.state,
      zipCode: sellerparam.zipCode,
    });

    // Save the user to the database
    await seller.save();

    res.status(201).json({ message: "Seller added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }

});
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// Record and Adding the data of new Property
app.post("/addnewproperty", async (req,res) => {
  try {
    const propertyparam = req.body;

    // Check if the property has been published before
    if (await Property.findOne({ property_id: propertyparam.property_id })) {
      return res.status(400).json({ message: "This property has been published before" });
    }    
    const property = new Property({
      property_id:  propertyparam.property_id,
      name: propertyparam.name,
      description: propertyparam.description,
      type:propertyparam.type,
      num_room: propertyparam.num_room,
      num_Bedrooms: propertyparam.num_Bedrooms,
      num_Bathrooms: propertyparam.num_Bathrooms,
      num_Floors: propertyparam.num_Floors,
      num_individuals: propertyparam.num_individuals,
      address: propertyparam.address,
      city: propertyparam.city,
      state: propertyparam.state,
      zipCode: propertyparam.zipCode,
      features: propertyparam.features,
      price: propertyparam.price,
      status: propertyparam.status,
      availabilityDate: propertyparam.availabilityDate,
      images: propertyparam.images,
    });
    // Save the property to the database
    await property.save();

    res.status(201).json({ message: "Property added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }

});

// Assignment => add new route here to edit user info ???
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const index = User.findIndex((user) => user.id === id);

  if (index !== -1) {
    User[index] = { ...User[index], ...updatedUser };
    res.status(200).json(User[index]);
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

app.get("/villas/:position", async (req, res) => {
  try {
    // req id
    const position = req.params.position;
    // find by id in users
    const villa = await Villa.find(position);
    res.status(200).json(villa);
  } catch (error) {
    res.status(402).json({ message: error.message });
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
