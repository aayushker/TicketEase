const express = require("express");
const mongoose = require("mongoose");
require("./config/db");
const User = require('./models/user'); 
const Ticket = require('./models/ticket');
const dataset = require('./models/dataset');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//putting data of users on the database
app.post("/login", async (req, resp) => {
    try {
        const userData = new User(req.body);
        if (!userData) {
            return resp.status(404).json({ msg: "User data not found" });
        }
        const saveData = await userData.save();
        resp.status(200).json(saveData);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});


//crud operations of ticket
app.post("/createticket", async (req, resp) => {
    try {
        const ticketData = new Ticket(req.body);
        if (!ticketData) {
            return resp.status(404).json({ msg: "Ticket data not found" });
        }
        const saveData = await ticketData.save();
        resp.status(200).json(saveData);
        console.log("Ticket created");
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
});

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

app.delete("/deleteticket/:id",async(req,resp)=>{
    try{
        const id=req.params.id;
        const ticketExist=await Ticket.findById(id);
        if(!ticketExist){
            return resp.status(400).json({msg:"ticket does not found"});
        }
        await Ticket.findByIdAndDelete(id);
        resp.status(200).json({msg:"ticket has been deleted successfully"});
    }
    catch(error){
        resp.status(404).json({error:"some unexpected error has been occured"})
    }
})

app.put("/updateTicket/:id", async (req, resp) => {
    try {
        const id = req.params.id;
        const ticketExist = await Ticket.findById(id);
        if (!ticketExist) {
            return resp.status(400).json({ msg: "ticket not found" });
        }
        const updatedData = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
        resp.status(200).json(updatedData);
    } catch (error) {
        resp.status(500).json({ error: "some unexpected error has occurred" });
    }
});

app.get("/search/:key",async(req,resp)=>{
    let result=await Ticket.find({
        "$or":[
            {MuseumId:{$regex:req.params.key}},
            {museumName:{$regex:req.params.key}},
            {time:{$regex:req.params.key}},
            {paymentId:{$regex:req.params.key}},
            {date:{$regex:req.params.key}},
            {day:{$regex:req.params.key}},
            
        ]
    });
    resp.send(result)
})


//dataset of museums
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
