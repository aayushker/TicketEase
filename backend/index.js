const express = require("express");
const mongoose = require("mongoose");
require("./config/db");
const User = require("./models/user");
const Ticket = require("./models/ticket");
const dataset = require("./models/dataset");
const app = express();
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";
const cors = require("cors");

app.use(express.json());
app.use(cors());

// login api
app.post("/login", async (req, resp) => {
  try {
    const userData = new User(req.body);
    const saveData = await userData.save();

    // Generate JWT after saving user data
    jwt.sign(
      { user: saveData },
      secretKey,
      { expiresIn: "300s" },
      (err, token) => {
        if (err) {
          return resp.status(500).json({ error: "Failed to generate token" });
        }
        resp.status(200).json({ token });
      }
    );
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

// Middleware to verify JWT
function verifyToken(req, resp, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    resp.status(403).json({ result: "Token is not valid" });
  }
}

// token verification
app.post("/profile", verifyToken, (req, resp) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      resp.status(403).json({ result: "Invalid token" });
    } else {
      resp.json({
        message: "Profile accessed",
        authData,
      });
    }
  });
});

// adding data into the ticket
app.post("/createticket", async (req, resp) => {
  try {
    const ticketData = new Ticket(req.body);
    const saveData = await ticketData.save();
    resp.status(200).json(saveData);
    console.log("Ticket created");
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

//getting data of the ticket
app.get("/getTickets", async (req, resp) => {
  try {
    const ticketData = await Ticket.find();
    if (!ticketData || ticketData.length === 0) {
      return resp.status(404).json({ msg: "No tickets found" });
    }
    resp.status(200).json(ticketData);
  } catch (error) {
    resp.status(500).json({ error: "Some error occurred" });
  }
});

//deleting the data of ticket
app.delete("/deleteticket/:id", async (req, resp) => {
  try {
    const id = req.params.id;
    const ticketExist = await Ticket.findById(id);
    if (!ticketExist) {
      return resp.status(400).json({ msg: "Ticket not found" });
    }
    await Ticket.findByIdAndDelete(id);
    resp.status(200).json({ msg: "Ticket has been deleted successfully" });
  } catch (error) {
    resp.status(500).json({ error: "Some unexpected error has occurred" });
  }
});

//updating the ticket data
app.put("/updateTicket/:id", async (req, resp) => {
  try {
    const id = req.params.id;
    const ticketExist = await Ticket.findById(id);
    if (!ticketExist) {
      return resp.status(400).json({ msg: "Ticket not found" });
    }
    const updatedData = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    resp.status(200).json(updatedData);
  } catch (error) {
    resp.status(500).json({ error: "Some unexpected error has occurred" });
  }
});

//search api
app.get("/search/:key", async (req, resp) => {
  try {
    const result = await Ticket.find({
      $or: [
        { MuseumId: { $regex: req.params.key, $options: "i" } },
        { museumName: { $regex: req.params.key, $options: "i" } },
        { time: { $regex: req.params.key, $options: "i" } },
        { paymentId: { $regex: req.params.key, $options: "i" } },
        { date: { $regex: req.params.key, $options: "i" } },
        { day: { $regex: req.params.key, $options: "i" } },
      ],
    });
    resp.status(200).json(result);
  } catch (error) {
    resp.status(500).json({ error: "Some unexpected error occurred" });
  }
});

// Dataset of museums
app.get("/getmuseums", async (req, resp) => {
  try {
    const museumData = await dataset.find();
    if (!museumData || museumData.length === 0) {
      return resp.status(404).json({ msg: "No museums found" });
    }
    resp.status(200).json(museumData);
  } catch (error) {
    resp.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
