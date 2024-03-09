const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/workshop")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true, // This enables the createdAt and updatedAt fields
  }
);

const User = mongoose.model("User", userSchema);

app.get("/health", (req, res) => {
  return res
    .status(200)
    .send({ msg: "OK", version: process.env.npm_package_version });
});

// Create a new user
app.post("/user", async (req, res) => {
  const { name } = req.body;
  const user = await User.create({ name });
  return res.status(200).send(user);
});

// Read all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  return res.status(200).send({ users });
});

// Update a user by ID
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedUser = await User.findByIdAndUpdate(id, { name }, { new: true });

  if (!updatedUser) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).send(updatedUser);
});

// Delete a book by ID
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);

  if (!deletedUser) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
