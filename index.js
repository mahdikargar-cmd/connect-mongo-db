const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/crud")
    .then(() => console.log("Connected to database"))
    .catch(err => console.error("Database connection error", err));
const userSchema =new mongoose.Schema({
    name: String,
    age: Number,
});
const UserModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (err) {
        console.log(err);
    }
});
app.get("*", (req, res) => {
    res.status(404).send("Not found");
});
app.listen(3001, () => {
    console.log("server is running");
});
