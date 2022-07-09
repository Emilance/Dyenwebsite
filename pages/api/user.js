import dbConnect from "../../util/mongo";
import User from "../../model/User";
import { errorHandler, responseHandler, validateUser } from "../../util/common";

export default  async function  handler(req, res){
    const { method } = req;

    dbConnect()
 
    if(method === "POST"){
        try {
            console.log(req.body)
            validateUser(req.body)
            const newUser = await new  User(req.body);
            const saveUser = await newUser.save()
            if(saveUser) {
                const token = saveUser.generateAuthToken();
                res.cookie("token", token, {
                  httpOnly:true,
                })
                .status(201).json(saveUser)
                // responseHandler(saveUser , res, 201)
            }else{
                errorHandler("sommething went wrong", res)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if(method === "GET"){
       
        try{
            const user = await  User.findOne({email: req.body.email});
            if(!user){
                res.status(401).json({message: "Invalid email or password"})
            }
            if(user.password === req.body.password){
                res.status(401).json({message:"Invalid email or password"})
            }
         
            res.status(200).json("Login SuccessFully")
        }catch(err){
            res.status(500).json(err)
        }
    }
   
  
    
}