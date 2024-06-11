import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/customer")

const customerSchema = new mongoose.Schema({
    usename : String,
    email : String,
    contact : Number,
    password : String
})

const CustomerModel = mongoose.model("customers", customerSchema)


app.post("/login" , (req , res)=>{
    const {email,password} = req.body;
    CustomerModel.findOne({email : email})
    .then(user => {
        if(user){
            if (user.password === password){
                res.json("Success")
            } 
            else{
                res.json("password is a incorrect")
            }
        }
        else{
            res.json("no record exist")
        }
    })  
})
app.post("/signup", (req,res) =>{
    CustomerModel.create(req.body)  
    .then(customers =>{
        res.json(customers)})
    .catch(err =>res.json(err))
})

app.listen(3001,()=>{console.log("app is running")});