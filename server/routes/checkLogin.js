export const checkLogin = async (req,res)=>{
    if(req.session.user)
    {
        res.send({login:true, user:req.session.user});
    }
    else{
        res.send({login:false});
    }
};