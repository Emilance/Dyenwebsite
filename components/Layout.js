import Navbar from "./Navbar";
import Footer from "./Footer";
import SlidingBanner from "./SlidingBanner";
import LogIn from "./LogIn";
import { useState } from "react";



const Layout = ( {children} ) => {
    const [logIn, setLogIn] = useState(false)

    const toggleLogIn = ()=> {
        setLogIn(!logIn)
    }
    return ( 
        <>
            <Navbar toggleLogIn={toggleLogIn}/>
            {logIn &&  <LogIn toggleLogIn={toggleLogIn}  />}
           
                {children}
            <Footer/>
        </>
     );
}
 
export default Layout;