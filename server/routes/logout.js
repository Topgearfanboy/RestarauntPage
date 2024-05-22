export const logout = async (req,res)=>{
    if(req.session.user)
    {
        req.session.destroy();
        res.send({logout:true});
    }
    else{
        res.send({logout:false});
    }
};