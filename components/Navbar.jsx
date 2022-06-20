import Image from "next/image";
import styles from "../styles/Navbar.module.css"
import telephone from  "../public/img/Telephone.png"
import Logo from  "../public/img/DyenLogo.png"
import {AiOutlineShoppingCart}  from "react-icons/ai"
import {BsTelephone} from  "react-icons/bs"

const Navbar = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.leftNavBar} >
              
                 <div className={styles.telImage}>
                     <BsTelephone color="green" size="100%"/>
                    
                 </div>
                 <div className={styles.telDetails}>
                      <p>Order Now</p>
                      <h5>08140711202</h5>
                 </div>
            </div>
            <div className={styles.middleNavbar}>
            <ul className={styles.list}>
                     <li className={styles.listItem}>Home</li>
                     <li className={styles.listItem}>About</li>
                  <div className={styles.logoContainer}>
                      <Image src={Logo}  alt="dyen Logo" />
                  </div>
                     
                     <li className={styles.listItem}>Contact</li>
                     <li className={styles.listItem}>Catalogue</li>
             </ul>
            </div>
            <div className={styles.rightNavBar}>
                 <div className={styles.cartcontainer}>
                     <AiOutlineShoppingCart  size='100%'/>
                     <div className={styles.cartCount}>0</div>
                 </div>
            </div>

        </div>
     );
}
 
export default Navbar;