const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const User = require("./modules_folder/studentmodule")
const database ="mongodb+srv://oliverquaye23:brainy1234@cluster0.o93nebc.mongodb.net/?retryWrites=true&w=majority"

const app = express()
const PORT =process.env.PORT || 3000
app.use(bodyParser.json())
mongoose.connect(database).then (
    function(){
        console.log("Connection successful")
    }
).catch (
    function(){
        console.log("Connection unsuccessful")
    }
)
 //student details from database
 app.get('/users', async (req, res)=>{
    try{
        const user = await User.find()
        res.send(user);
    }catch(error){
        res.send(error);
        }
 })
//add user information to database
app.post('/addUser', async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.send(user);
    }catch(error){
        res.send(error)
    }
})
app.get('/user/:id',async(req, res)=>{
    try{
        const user=await user.findone({id:req,params,id});
        res.send(user);
    }catch(error){
        res.send(error);
    }
})

app.listen(PORT,()=>{
    console.log ('server is running on port ${PORT}')
})
