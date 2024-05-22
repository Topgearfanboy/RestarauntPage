import express from 'express';
import  cors from "cors";
import  bodyParser from "body-parser";
import cookieparser from "cookie-parser"
import session from "express-session";
import { MongoClient, ServerApiVersion } from 'mongodb';
import { HelloWorld } from './routes/helloWorld.js';
import { getAll } from './routes/getAll.js';
import { register } from './routes/register.js';
import { login } from './routes/login.js';
import { checkLogin } from './routes/checkLogin.js';
import { logout } from './routes/logout.js';


const saltRounds = 10;

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

app.get("/", async (req,res)=>{HelloWorld(req,res)});

app.get("/getAll", async (req,res)=>{getAll(req,res,client)})

app.post("/register",async (req,res)=>{register(req,res,client, saltRounds)})

app.post("/login",async (req,res)=>{login(req,res,client)})

app.get("/logout",(req,res)=>{ logout(req,res)})

app.get("/checkLogin",(req,res)=>{ checkLogin(req,res) })

app.listen(PORT,()=>{
    console.log(`app running in ${PORT}` )
})