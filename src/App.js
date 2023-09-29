// External variables
const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
const {createUser,getUsers, updateUser, deleteUser} = require("./Routes/userController");
const MongoURI = process.env.MONGO_URI ;


//App variables
const app = express();
const port = process.env.PORT || "8000";
const user = require('./Models/User');
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

// #Routing to userController here

app.use(express.json())
app.post("/addUser",createUser);
app.get("/users", getUsers);
app.put("/updateUser", updateUser);
app.delete("/deleteUser", deleteUser);


/*
                                                    End of your code
*/

