const express = require("express");
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../config");
const { User, Account } = require("./../db");
const { authMiddleware } = require("./../middleware/authMiddleware");
const routes = express.Router();

const sighupBody = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  username: zod.string().email(),
  password: zod.string().min(8),
});
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
routes.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const { success } = sighupBody.safeParse({
    firstName,
    lastName,
    username,
    password,
  });
  if (!success) {
    return res.status(411).json({
      message: "Invalid credentials",
    });
  }
  const userExits = await User.findOne({
    username,
  });
  if (userExits) {
    return res.status(411).json({
      message: "User already exists with the username or password",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      username,
      password: hashedPassword,
    });
    const userId = newUser._id;
    await Account.create({
      userId,
      balance: 1 * Math.random() * 10000,
    });
    const token = jwt.sign({ userId }, JWT_SECRET);
    res.json({
      message: "User Created Successfully",
      token: token,
    });
  }
});
routes.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const { success } = signinBody.safeParse({ username, password });
  if (!success) {
    return res.status(411).json({
      message: "Error while logging in / Incorrect inputs",
    });
  }
  try {
    const user = await User.findOne({
      username,
    });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const userId = user._id;
        const token = jwt.sign({ userId }, JWT_SECRET);
        return res.json({
          token: token,
          message: "Login successful",
        });
      } else {
        return res.status(411).json({
          message: "user doesn't exist with given credentials",
        });
      }
    }
  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
routes.put("/update", authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }
  const updateFields = {};

  if (req.body.password) {
    updateFields.password = req.body.password;
    updateFields.password = await bcrypt.hash(updateFields.password, 10);
  }
  if (req.body.firstName) {
    updateFields.firstName = req.body.firstName;
  }
  if (req.body.lastName) {
    updateFields.lastName = req.body.lastName;
  }
  const updatedUser = await User.findOneAndUpdate(
    { _id: req.userId },
    { $set: updateFields },
    { new: true }
  );

  if (!updatedUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  res.json({
    message: "Updated successfully",
    updatedUser,
  });
});
routes.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: { $regex: filter },
      },
      {
        lastName: { $regex: filter },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
module.exports = routes;
