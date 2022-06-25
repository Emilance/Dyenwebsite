import Newsletter from "./Newsletter";
import styles from '../styles/Footer.module.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
    return ( 
        <div className={styles.container}>

            <Newsletter/>
            <div className={styles.footerContainer}>
                <div className={styles.pages}>
                    <ul className={styles.navLinks}>
                        <h2>DYEN</h2>
                        <li className={styles.listItem}>Contact</li>
                        <li className={styles.listItem}>About Us</li>
                        <li className={styles.listItem}>Shipping Policy</li>
                        <li className={styles.listItem}>Terms of Service</li>
                        <li className={styles.listItem}>Disclaimer</li>
                        <li className={styles.listItem}>FAQ</li>

                    </ul>
                <div className={styles.socialLinks}>
                    <h1>FOLLOW US</h1>
                    <div className={styles.iconsContainer}>
                          <div className={styles.icon}>
                              <BsFacebook size="100%"/>
                          </div>
                          <div className={styles.icon}>
                              <BsInstagram size="100%"/>
                          </div>
                          <div className={styles.icon}>
                              <BsInstagram size="100%"/>
                          </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;