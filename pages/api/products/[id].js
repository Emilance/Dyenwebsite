import dbConnect from "../../../util/mongo";
import Product from "../../../model/Product";

export default  async function  handler(req, res){
    const { method,
         query:{ id } } = req;

   dbConnect()

    if(method === "GET"){
       
        try{
            const products = await  Product.findById(id);
            res.status(200).json(products)
        }catch(err){
            res.status(500).json(err)
        }
    }
   
    if(method === "PUT"){
        try{
          const product = await Product.findById(id);
          res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }
    if(method === "DELETE"){
        try{
          const product = await Product.findByIdAndDelete(id);
          res.status(200).json("deleted SuccessFully")
        }catch(err){
            res.status(500).json(err)
        }
    }
}