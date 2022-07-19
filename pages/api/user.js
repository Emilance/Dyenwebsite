import dbConnect from "../../util/mongo";
import User from "../../model/User";
import { errorHandler, responseHandler, validateUser } from "../../util/common";
import cookie from "cookie" ;


export default  async function  handler(req, res){
    const { method } = req;

    dbConnect()
 
    if(method === "POST"){
        try {
            validateUser(req.body)
            const newUser = await new  User(req.body);
            const saveUser = await newUser.save()
            console.log(req.body)
            if(saveUser) {          
                    res.setHeader("Set-Cookie",  cookie.serialize("userToken", process.env.USER_TOKEN, {
                        maxAge: 60 * 60,
                        sameSite : "strict",
                        path: "/"
                    }))
                res.status(200).json(saveUser)
                // responseHandler(saveUser , res, 201)
            }else{
                errorHandler("something went wrong", res)
            }
        } catch (error) {
            res.json(error)
        }
    }
    if(method === "GET"){
       
        try{
            const user = await  User.findOne({email: req.body.email});
            if(!user){
                res.status(401).json({message: "Invalid email or password"})
            }
            if(user.password !== req.body.password){
              return   res.status(401).json({message:"Invalid email or password"})
            }


            if(user){
                res.setHeader("Set-Cookie",  cookie.serialize("userToken", process.env.USER_TOKEN, {
                    maxAge: 60 * 60,
                    sameSite : "strict",
                    path: "/"
                }))
            
                res.status(200).json("Login SuccessFully")
            }
         
        }catch(err){
            res.status(500).json(err)
        }
    }
    
}