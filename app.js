const express = require("express");
const bcrypt = require("bcryptjs");
const connetDB = require("./db");
const User = require("./models/User");
const app = express();
app.use(express.json());
/*
  * Request Input Sources
   - req body (from 'Form')
   - req Param ()
   - req Query ()
   - req Headers
   - req Cookies
*/
app.post("/register", async (req, res, next) => {
  // console.log(req.body);
  // const name = req.body.name;
  // const email = req.body.email;
  // const possword = req.body.possword;
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "invalid data" });
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    await user.save();
    return res.status(201).json({ massege: "User Created successfuly", user });
  } catch (e) {
    next(e);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid Credential" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "invalid Credential" });
    }
    delete user._doc.password;
    return res.status(200).json({ message: "Login Successsful", user });
  } catch (e) {
    next(e);
  }
});
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ massege: "Server Error Occured" });
});
app.get("/", (_, res) => {
  const obj = {
    name: "Ayman",
    email: "ayamn@example.com",
  };
  res.json(obj);
});
connetDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database connect");
    app.listen(4000, () => {
      console.log("Hello");
    });
  })
  .catch((e) => {
    console.log(e);
  });
