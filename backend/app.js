const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Property = require("./models/property.model");
const Meeting = require("./models/meetingform.model");
const Card = require("./models/card.model");
const bcrypt = require("bcrypt");
const app = express();
// const Seller = require("./models/seller.model");
const mongouri = "mongodb://localhost:27017/villa-store";

// app service
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
  // find by id in users
    const user = await User.findOne(user_id);
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
    const { user_id } = req.params;

    // Attempt to find and delete the user by ID
    const user = await User.findOneAndDelete(user_id);

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
// app.post("/adduser", async (req, res) => {
//   try {
//     const userParam = req.body;

//     // Check if the email is already in use
//     if (await User.findOne({ email: userParam.email })) {
//       return res.status(400).json({ message: "Email is already in use" });
//     }

//     // Hash the user's password before saving it
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(userParam.password, saltRounds);
//     // Create a new User instance with the hashed password and 'fullName'
//     const user = new User({
//       user_id: userParam.user_id,
//       fullName: userParam.fullName, // Make sure 'fullName' is provided
//       phone: userParam.phone,
//       email: userParam.email,
//       password: hashedPassword,
//       image: userParam.image,

//     });

//     // Save the user to the database
//     await user.save();

//     res.status(201).json({ message: "User added successfully" });
//   } catch (err) {
//      res.status(404).json({ message: "Server error: " + err.message });
//   }
//  });

// Record and Adding the data of new Seller person
// app.post("/addnewseller", async (req,res) => {
//   try {
//     const sellerparam = req.body;

//     // Check if the email is already in use
//     if (await Seller.findOne({ email: sellerparam.email })) {
//       return res.status(400).json({ message: "Email is already in use" });
//     }

//     // Hash the user's password before saving it
//     const saltRouns = 10;
//     const hashedPassword = await bcrypt.hash(sellerparam.password, saltRouns);
//     // Create a new User instance with the hashed password and 'fullName'
//     const seller = new Seller({
//       seller_id:  sellerparam.seller_id,
//       fullName: sellerparam.fullName, // Make sure 'fullName' is provided
//       name: sellerparam.name,
//       phone: sellerparam.phone,
//       email: sellerparam.email,
//       password: hashedPassword,
//       street: sellerparam.street,
//       city: sellerparam.city,
//       state: sellerparam.state,
//       zipCode: sellerparam.zipCode,
//     });

//     // Save the user to the database
//     await seller.save();

//     res.status(201).json({ message: "Seller added successfully" });
//   } catch (err) {
//     res.status(404).json({ message: "Server error: " + err.message });
//   }

// });

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

app.post("/reqmeeting", async (req, res) => {
  try {
    const meetingParam = req.body;

    const meeting = new Meeting({
      user_id: meetingParam.user_id,
      fullName: meetingParam.fullName,
      phone: meetingParam.phone,
      Available_dates: meetingParam.Available_dates,
      Available_times: meetingParam.Available_times,
      Location: meetingParam.Location,
    });
    await meeting.save();

    res.status(201).json({ message: "Meeting scheduled successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/addusers", async (req, res) => {
  try {
    const userParam = req.body;
    let user_email_exist = []
    // console.log(userParam)
    for (let i = 0; i < userParam.length; i++) {
      console.log(userParam[i]);
      // // Hash the user's password before saving it
      // Check if the email is already in use
      if (!(await User.findOne({ email: userParam[i].email }))) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userParam[i].password, saltRounds);
        // Create a new User instance with the hashed password and 'fullName'
        const user = new User({
          user_id: userParam[i].user_id,
          fullName: userParam[i].fullName, // Make sure 'fullName' is provided
          phone: userParam[i].phone,
          email: userParam[i].email,
          password: hashedPassword,
          image: userParam[i].image,

        });

        // Save the user to the database
        await user.save();
      } else {
        user_email_exist.push(userParam[i])
      }

    }
    // here print the users are exist in DB
    if (user_email_exist) {
      res.status(201).json({ users: user_email_exist, massege: "User is exist" });
    }

    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }
});


/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

app.post("/reqmeeting", async (req, res) => {
  try {
    const meetingParam = req.body;

    const meeting = new Meeting({
      user_id: meetingParam.user_id,
      fullName: meetingParam.fullName,
      phone: meetingParam.phone,
      Available_dates: meetingParam.Available_dates,
      Available_times: meetingParam.Available_times,
      Location: meetingParam.Location,
    });
    await meeting.save();

    res.status(201).json({ message: "Meeting scheduled successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

////////////////////////////////////
////////////////////////////////////
app.post("/addnewcard", async (req, res) => {
  try {
    const cardyparam = req.body;

    const card = new Card({
      userId: cardyparam.userId,
      cardName: cardyparam. cardName,
      cardNumber:cardyparam. cardNumber,
      cvv: cardyparam.cvv,
      expirationDate: cardyparam.expirationDate,
   
    });
    // Save the property to the database
    await card .save();

    res.status(201).json({ message: "Card added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }

});


////////////////////////////////
//////////////////////////////

app.post("/addnewproperty", async (req,res) => {
  try {
    const propertyparam = req.body;

    // Check if the property has been published before
    if (await Property.findOne({ property_id: propertyparam.property_id })) {
      return res.status(400).json({ message: "This property has been published before" });
    }    
    const property = new Property({
      property_id:  propertyparam.property_id,
      catagory: propertyparam.catagory,
      Out_ttitle: propertyparam. Out_ttitle,
      In_title: propertyparam.In_title,
      short_address: propertyparam.short_address,
      sale_type: propertyparam.sale_type,
      size: propertyparam.size,
      country: propertyparam.country,
      street: propertyparam.street,
      city: propertyparam.city,
      state: propertyparam.state,
      District:  propertyparam.District,
      num_house: propertyparam.num_house,
      description: propertyparam.description,
      type:propertyparam.type,
      num_room: propertyparam.num_room,
      num_Bedrooms: propertyparam.num_Bedrooms,
      num_Bathrooms: propertyparam.num_Bathrooms,
      num_Floors: propertyparam.num_Floors,
      num_individuals: propertyparam.num_individuals,
      Amenities: propertyparam.Amenities,
      price: propertyparam.price,
      status: propertyparam.status,
      availabilityDate: propertyparam.availabilityDate,
      images: propertyparam.images,
    });
    // Save the property to the database
    await property .save();

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
app.post("/addvilla", async (req, res) => {
  try {
    const villaParam = req.body;

    // Check if the email is already in use
    if (await Villa.findOne({ villa_id: villaParam.villa_id })) {
      return res.status(400).json({ message: "villa is already in use" });
    }

    // Hash the user's password before saving it

    // Create a new User instance with the hashed password and 'fullName'
    const villa = new Villa({
      villa_id: villaParam.villa_id,
      user_id: villaParam.user_id,
      price: villaParam.price,
      villa_adress: villaParam.villa_adress,
      position: villaParam.position,
      installment_price: villaParam.installment_price,
      installment_period: villaParam.installment_period,
      num_room: villaParam.num_room,
      num_bedroom: villaParam.num_bedroom,
      num_bathroom: villaParam.num_bathroom,
      Num_individuals: villaParam.Num_individuals,
      discount: villaParam.discount,
      description: villaParam.description,
      images: villaParam.images,
    });

    // Save the user to the database
    await villa.save();

    res.status(201).json({ message: "villa added successfully" });
  } catch (err) {
    res.status(404).json({ message: "Server error: " + err.message });
  }
});
app.delete("/villa/:id", async (req, res) => {
  try {
    const { villa_id } = req.params.villa_id;

    // Attempt to find and delete the user by ID
    const villa = await Villa.findOneAndDelete(villa_id);

    if (!villa) {
      return res
        .status(404)
        .json({ message: `Cannot find any villa with ID ${id}` });
    }

    res.status(200).json({ message: "Villa deleted successfully" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
});
app.put("/villa/:id", async (req, res) => {
  try {
    const villa_id = req.params.villa_id;
    // find by id in users
    const villa = await Villa.findOne(villa_id);

    if (!villa) {
      console.log(villa);
      return res.status(404).json({ message: "Villa not found" });
    }

    // Update user details if provided in the request body
    if (req.body.status_sale) {
      villa.status_sale = req.body.status_sale;
    }
    if (req.body.price) {
      villa.price = req.body.price;
    }
    if (req.body.villa_adress) {
      villa.villa_adress = req.body.villa_adress;
    }
    if (req.body.position) {
      villa.position = req.body.position;
    }
    if (req.body.installment_price) {
      villa.installment_price = req.body.installment_price;
    }
    if (req.body.installment_period) {
      villa.installment_period = req.body.installment_period;
    }
    if (req.body.num_room) {
      villa.num_room = req.body.num_room;
    }
    if (req.body.num_bedroom) {
      villa.num_bedroom = req.body.num_bedroom;
    }
    if (req.body.num_bathroom) {
      villa.num_bathroom = req.body.num_bathroom;
    }
    if (req.body.Num_individuals) {
      villa.Num_individuals = req.body.Num_individuals;
    }
    if (req.body.discount) {
      villa.discount = req.body.discount;
    }
    if (req.body.description) {
      villa.description = req.body.description;
    }
    if (req.body.images) {
      villa.images = req.body.images;
    }
    if (req.body.price) {
      villa.images = req.body.images;
    }

    // Add more fields as needed

    // Save the updated user
    await villa.save();

    res.status(200).json(villa);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});

app.get("/property", async (req, res) => {
  try {
    const Propertyes = await Property.find({});
    res.status(200).json(Propertyes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

app.get("/property/:position", async (req, res) => {
  try {
    // req id
    const villa_id = req.params.user_id;
    // find by id in users
    const propertyes = await property.find(position);
    res.status(200).json(propertyes);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/villas-store")

  .then(() => {
    console.log("connected to MongoDB");
    //listen on specific port
    app.listen(5000, () => console.log("app started on port 5000"));
  })
  .catch((error) => {
    console.log("cant connect to mongodb" + error);
  });
