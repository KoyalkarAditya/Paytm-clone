const express = require("express");
const mongoose = require("mongoose");
const { Account } = require("./../db");
const { authMiddleware } = require("../middleware/authMiddleware");
const routes = express.Router();
routes.get("/balances", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const account = await Account.findOne({
    userId,
  });
  if (!account) {
    return res.json({
      message: "Account does not exist",
    });
  }
  res.status(200).json({
    balance: account.balance,
  });
});

routes.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const toID = req.body.to;
  const amount = req.body.amount;
  const userId = req.userId;
  const account = await Account.findOne({
    userId,
  }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }
  const toAccount = await Account.findOne({
    userId: toID,
  }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }
  await Account.updateOne(
    {
      userId: userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);
  await Account.updateOne(
    {
      userId: toID,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);

  await session.commitTransaction();
  res.json({
    message: "Transfer Successful",
  });
});

module.exports = routes;
