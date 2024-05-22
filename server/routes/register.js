import  bcrypt from 'bcrypt';


export const register = async (req,res, mongoClient, saltRounds)=>{
    await mongoClient.connect();
    const db = mongoClient.db('TestDatabase');
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
};