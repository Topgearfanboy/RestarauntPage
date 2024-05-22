import  bcrypt from 'bcrypt';


export const login = async (req,res, mongoClient)=>{
    await mongoClient.connect();
    const db = mongoClient.db('TestDatabase');
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
};