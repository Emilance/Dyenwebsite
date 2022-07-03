import styles from '../styles/Contact.module.css'
import Image from "next/image";
import ContactDetails from '../components/ContactDetails';


const Contact = () => {
    const style = {
        backgroundImage:' linear-gradient( #0000006f 70%, #000000e1 90%),  url("/img/contact.png")',
        height:"25rem",
        paddingTop:"100px",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
        


    }
   
    return ( 
        <div className={styles.container}>
            <div className={styles.bannerImg} style={style}>
                     <h1> Contact Us</h1>

            </div>
            
            <div  className={styles.formContainer} >
                 <div className={styles.leftImg} >
                     <Image src="/img/top6.jpg" alt="" layout="fill"/>
                 </div>

            <form > 
                <div className={styles.field}>
                    <input type="text" placeholder="Your Name"/>
                </div>
                <div className={styles.field}>
                    <input type="email" placeholder="Your Email"/>
                </div>
                <div className={styles.field}>
                    <input type="tel" placeholder="Your Phone"/>
                </div>
                <div className={styles.field}>
                  <textarea placeholder='Type your message here'/>
                </div>
                <button > Submit</button>
            </form>
            </div>

            <ContactDetails/>
        </div>
     );
}
 
export default Contact;