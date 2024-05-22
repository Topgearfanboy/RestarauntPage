export const getAll = async (req,res, mongoClient)=>{  //TODO: Remove this
    try {
        await mongoClient.connect();
        const db = mongoClient.db('TestDatabase');
        const collection = db.collection('users');
        res.send(await collection.find().toArray());
     
    } catch (e) {
        res.send(console.error(e));
    }
};