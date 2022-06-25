import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import telephone from  "../public/img/Telephone.png"
import Logo from  "../public/img/DyenLogo.png"
import Link from "next/link";
import {AiOutlineShoppingCart}  from "react-icons/ai"
import {BsTelephone} from  "react-icons/bs"
import MobileNavigation from "./MobileNavigation";
import {GrMenu} from "react-icons/gr"
import {ImCross}  from "react-icons/im"
import { RiUser3Fill } from "react-icons/ri"
import { useState } from "react";

const Navbar = ({ toggleLogIn }) => {
    const [open, setOpen] = useState(false)

    const toggleNav = ()=> {
        setOpen(!open)
    }
    return ( 
        <div className={styles.container}>
            <div className={styles.leftNavBar} >
              
                 <div className={styles.telImage}>
                     <BsTelephone  size="100%"/>                
                 </div>
                 <div className={styles.telDetails}>
                      <p>Order Now</p>
                      <h5>08140711202</h5>
                 </div>
                 {open ?
                  <div onClick={toggleNav} className={styles.hambugger}>
                  <ImCross size="100%"/>
              </div>
                :
               <div onClick={toggleNav}   className={styles.hambugger}>
                  <GrMenu size="100%"/>
                </div>
          }
                 

            </div>
            <div className={styles.middleNavbar}>
            <ul className={styles.list}>
                <Link href="/">
                     <li className={styles.listItem}>
                               <a>Home</a>
                         </li>
                 </Link>
                <Link href="/about">
                     <li className={styles.listItem}>
                             About
                     </li>
                </Link>
                  <div className={styles.logoContainer}>
                      <Image src={Logo}  alt="dyen Logo" />
                  </div>
                     
                <Link href="/contact">
                     <li className={styles.listItem}>
                             Contact
                     </li>
                 </Link>
                <Link href='/collection/HAT'>
                     <li className={styles.listItem}>
                             <a>Collection</a>
                     </li>
                 </Link>
             </ul>
            </div>
            <div className={styles.rightNavbar}>
                 <div onClick={toggleLogIn} className={styles.rightIcon}>
                    <RiUser3Fill title="log in" size="100%"/>
                 </div>
                 <div className={styles.rightIcon}>
                     <AiOutlineShoppingCart title="cart" size='100%'/>
                     <div className={styles.cartCount}>0</div>
                 </div>
            </div>
            {open &&   <MobileNavigation/> }
           

        </div>
     );
}
 
export default Navbar;