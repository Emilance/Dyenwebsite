import styles from "../styles/MobileNavigation.module.css"
import Link from "next/link";

const MobileNavigation = () => {
    return ( 
        <div className={styles.container}>
        <div className={styles.mobileNav}>
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
                     <div className={styles.buttonContainer}>
                         <button >Login</button>
                         <button>Sign Up</button>
                     </div>
             </ul>
            </div>
        </div>
     );
}
 
export default MobileNavigation;