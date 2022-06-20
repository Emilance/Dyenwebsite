import Navbar from "./Navbar";
import Footer from "./Footer";
import SlidingBanner from "./SlidingBanner";



const Layout = ( {children} ) => {
    return ( 
        <>
            <Navbar/>
                {children}
            <Footer/>
        </>
     );
}
 
export default Layout;