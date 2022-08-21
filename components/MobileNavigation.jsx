import styles from "../styles/MobileNavigation.module.css"
import Link from "next/link";

const MobileNavigation = ( { toggleNav,  toggleLogIn}) => {
        const showLogIn = () =>{
                toggleLogIn();
                toggleNav();
        }
    return ( 
        <div className={styles.container}>
        <div className={styles.mobileNav}>
            <ul className={styles.list}>
                    <Link href="/">
                    <li onClick={toggleNav} className={styles.listItem}>
                               <a>Home</a>
                         </li>
                    </Link>
                    <Link href="/about">
                     <li onClick={toggleNav} className={styles.listItem}>
                             About
                     </li>
                     </Link>
                     <Link href="/contact">
                     <li  onClick={toggleNav} className={styles.listItem}>
                             Contact
                     </li>
                     </Link>
                    <Link href='/collection/cap'>
                     <li onClick={toggleNav} className={styles.listItem}>
                             <a>Collection</a>
                     </li>
                     </Link>
                     <Link href='/login'>
                     <div className={styles.buttonContainer}>
                         <button onClick={toggleNav} >Login</button>
                         <button onClick={toggleNav} >Sign Up</button>
                     </div>
                     </Link>
             </ul>
            </div>
        </div>
     );
}
 
export default MobileNavigation;