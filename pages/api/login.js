import cookie from "cookie" ;



export default  async function  handler(req, res){
    console.log(req.body)
    if(req.method === "POST"){

        const {username, password} = req.body    
        console.log(username)
      if(username == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD){
            res.setHeader("Set-Cookie",  cookie.serialize("token", process.env.TOKEN, {
                maxAge: 60 * 60,
                sameSite : "strict",
                path: "/"
            }))
            res.status(200).json("Succesfull");
    }else{
        res.status(400).json("Wrong Credentials!")
    }
    }
}