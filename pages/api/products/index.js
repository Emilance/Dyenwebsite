import dbConnect from "../../../util/mongo";
import Product from "../../../model/Product";

export default  async function  handler(req, res){
    const { method, cookies } = req;
    const adminToken = cookies.token
   dbConnect()

    if(method === "GET"){
        
        try{
            const product = await  Product.find();
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method === "POST"){
        if(!adminToken || adminToken !== process.env.TOKEN){
            return res.status(401).json("Not Authenticated Admin")
        }
        try{
          const product = await Product.create(req.body);
          res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
}