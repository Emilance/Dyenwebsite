import styles from '../styles/ContactDetails.module.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

import { GoLocation , GoQuote }  from 'react-icons/go'


const ContactDetails = () => {

    return ( 
        <div className={styles.container}>

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
              
              <div className={styles.addressCon}>
                  <div className={styles.address}>
                  <div className={styles.icon}>
                              <GoLocation size="100%"/>
                        </div>
                      <h4>Eginrin Road, Ijebu Ode, Ogun State, Nigeria</h4>
                  </div>
              </div>
              <div className={styles.addressCon2}>
                  <div className={styles.address}>
                  <div className={styles.icon}>
                              <GoQuote size="100%"/>
                        </div>
                      <h4>We prioritize our customer's satisfaction</h4>
                  </div>
              </div>
        </div>
     );
}
 
export default ContactDetails
