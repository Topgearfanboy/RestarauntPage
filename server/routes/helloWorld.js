export const HelloWorld = async (req,res)=>{
    try {
        res.send("Hello World");
    } catch (e) {
        res.send(console.error(e));
    }
};