const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Book = require("./models/villa.model");
const Purchase = require("./models/purchase.model");
const bcrypt = require("bcrypt");

const mongouri = "mongodb://localhost:27017/villa-store";
// app service
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// let users = [
//   {
//     id: "1",
//     name: "Ali",
//     phone: "0111111",
//     email: "ali@gmail.com",
//   },
//   {
//     id: "2",
//     name: "mohamed",
//     phone: "02222222",
//     email: "mohamed@gmail.com",
//   },
//   {
//     id: "3",
//     name: "Ahmed",
//     phone: "0333333333333",
//     email: "Ahmed@gmail.com",
//   },
// ];

app.get("/", (req, res) => {
  res.send("Hello World, from cs309");
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: "Internal Server Error" });
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
    res.status(500).json({ message: error.message });
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
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
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

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/book/:id", async (req, res) => {
  try {
    // req id
    const id = req.params.id;
    // find by id in users
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Assignment => write route to get user by email ????

app.get("/boods/title/:title", async (req, res) => {
  try {
    const { title } = req.params;

    // Find the user by email in your database
    const book = await Book.findOne({ title });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Attempt to find and delete the user by ID
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res
        .status(404)
        .json({ message: `Cannot find any book with ID ${id}` });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/addbook", async (req, res) => {
  try {
    const bookParam = req.body;

    // Check if the email is already in use
    if (await Book.findOne({ title: bookParam.title })) {
      return res.status(400).json({ message: "Title is already in use" });
    }

    const book = new Book({
      title: bookParam.title, // Make sure 'fullName' is provided
      description: bookParam.description,
      author: bookParam.author,
      price: bookParam.price,
      stock: bookParam.stock,
      categories: bookParam.categories,
    });

    // Save the user to the database
    await book.save();

    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

// Assignment => add new route here to edit user info ???
app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const updatedBooks = req.body;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    users[index] = { ...books[index], ...updatedBooks };
    res.status(200).json(books[index]);
  } else {
    res.status(404).send("book not found");
  }
});

////////////////////////////////////////
////////////////////////////////////////

app.post("/addpurchase", async (req, res) => {
  try {
    const purchaseParam = req.body;

    // Check if the email is already in use
    if (
      await (Book.findOne({ bookid: purchaseParam.userid }) &&
        Book.findOne({ bookid: purchaseParam.bookid }))
    ) {
      return res.status(400).json({ message: "it is already defind" });
    } else {
      const purchase = new Purchase({
        userid: bookParam.userid, // Make sure 'fullName' is provided
        bookid: bookParam.bookid,
      });

      // Save the user to the database
      await book.save();

      res.status(201).json({ message: "Book added successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/lab2db")
  .then(() => {
    console.log("connected to MongoDB");
    //listen on specific port
    app.listen(8000, () => console.log("app started on port 8000"));
  })
  .catch((error) => {
    console.log("cant connect to mongodb" + error);
  });
