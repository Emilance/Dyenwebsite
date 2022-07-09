import dbConnect from "../../util/mongo";
import Contact  from "../../model/Contact"
import { validateUser } from "../../util/common";


export default async function handler(req, res){
    const { method } = req;

    dbConnect();
    if(method === "POST"){
        try {
            validateUser(req.body);
            const contactUs =  await Contact.create(req.body)
            res.status(200).json({message: "Form Submitted successully"})
        } catch (error) {
            res.status(500).json(error)
        }
    }

}