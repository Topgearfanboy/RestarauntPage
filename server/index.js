import express from 'express';
import  cors from "cors";
import  bcrypt from 'bcrypt';
import  bodyParser from "body-parser";
import cookieparser from "cookie-parser"
import session from "express-session";
// import ('.env').config();

const saltRounds = 10;

import { MongoClient, ServerApiVersion } from 'mongodb';
console.log(process.env.USERNAME)
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ltymbqk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const PORT=process.env.PORT || 8000;


const app=express();


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    key:"userId",
    secret:"atanu",
    resave:false,
    saveUninitialized:false,
    // cookie:{
    //     expires:60*60*60*24,
    // }
}))






app.get("/",async (req,res)=>{
    try {
        res.send("Hello World");
    } catch (e) {
        res.send(console.error(e));
    }
})

app.get("/getAll",async (req,res)=>{  //TODO: Remove this
    try {
        await client.connect();
        const db = client.db('TestDatabase');
        const collection = db.collection('users');
        res.send(await collection.find().toArray());
     
    } catch (e) {
        res.send(console.error(e));
    }
})

app.post("/register",async (req,res)=>{
    await client.connect();
    const db = client.db('TestDatabase');
    const collection = db.collection('users');
    const email=req.body.email;
    const password=req.body.password;
    const username=req.body.username;
    bcrypt.hash(password,saltRounds,async (errr,hash)=>{
        if(errr)
        {
            console.log(err);
        }
        else{
            let searchResults = await collection.find({email:email}).toArray()
            if(searchResults.length > 0)
            {
                res.send({msg:"User Email Already Present"})
            }
            else{
                const newUser = {
                    email: email,
                    password: hash,
                    username: username
                };
                let add = await collection.insertOne(newUser);    
                res.send(add.acknowledged);
            }
       }
    }) 
})

app.post("/login",async (req,res)=>{
    await client.connect();
    const db = client.db('TestDatabase');
    const collection = db.collection('users');
    const email=req.body.email;
    const password=req.body.password;
    let searchResults = await collection.find({email:email}).toArray()
    if(searchResults.length > 0)
    {
        bcrypt.compare(password,searchResults[0].password,(errr,response)=>{
            if(response)
            {
                req.session.user = searchResults[0];
                res.send({login:true,useremail:email});
            }
            else{
                res.send({login:false,msg:"Wrong Password"});
            }
        })
    }
    else{
        res.send({login:false,msg:"User Email Not Exits"});
    }
})

app.get("/logout",(req,res)=>{
    if(req.session.user)
    {
        req.session.destroy();
        res.send({login:true});
    }
    else{
        res.send({login:false});
    }
})

app.get("/login",(req,res)=>{
    if(req.session.user)
    {
        res.send({login:true, user:req.session.user});
    }
    else{
        res.send({login:false});
    }
})

app.listen(PORT,()=>{
    console.log(`app running in ${PORT}` )
})