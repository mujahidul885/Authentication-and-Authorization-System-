import express from "express";
import cors from "cors";
import mongoose from "mongoose";



const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/EMS2')
  .then(() => console.log("✅ Connected to MongoDB "))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const userSchema = new mongoose.Schema({
  Username: String,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});


const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("🌐 MongoDB  Connected!");
});

app.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ message: "User saved!" });
  } catch (err) {
    res.status(500).json({ message: "Error saving user" });
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const Username = `${firstName}${lastName}`; 

    const newUser = new User({ Username, firstName, lastName, email, phone, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});




app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});