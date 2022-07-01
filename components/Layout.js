import Navbar from "./Navbar";
import Footer from "./Footer";
import SlidingBanner from "./SlidingBanner";
import LogIn from "./LogIn";
import { useState } from "react";
import { createContext } from "react";



export const toggleLog = createContext()
const Layout = ( {children} ) => {
    const [logIn, setLogIn] = useState(false)

    const toggleLogIn = ()=> {
        setLogIn(!logIn)
    }
    return ( 
        <>
        <toggleLog.Provider value={toggleLogIn}>

            <Navbar toggleLogIn={ toggleLogIn }  />
        </toggleLog.Provider>
            {logIn &&  <LogIn toggleLogIn={toggleLogIn}  />}
           
                {children}
            <Footer/>
        </>
     );
}
 
export default Layout;