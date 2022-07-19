import dbConnect from "../../../util/mongo";
import Product from "../../../model/Product";

export default  async function  handler(req, res){
    const { method,
         query:{ collec} } = req;
        
   dbConnect()

    if(method === "GET"){
        try{
            const products = await  Product.find({ collec });
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err, "u no uknow")
        }
    }
   
   
}