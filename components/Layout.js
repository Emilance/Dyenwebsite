import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";




const Layout = ( {children} ) => {
    const [user, setUser] = useState(false)


    return ( 
        <>
     
            <Navbar  user={user} />
           
                {children}
            <Footer/>
           
        </>
     );
}
 
export default Layout;


