import styles from '../styles/Contact.module.css'
import Image from "next/image";
import ContactDetails from '../components/ContactDetails';
import { useState } from 'react';
import axios from 'axios';


const Contact = () => {
    const [contactUs, setContactUs] = useState({name:"", email:"", phone: "", message:""})
    const [response, setResponse] = useState(null)
    const style = {
        backgroundImage:' linear-gradient( #0000006f 70%, #000000e1 90%),  url("/img/contact.png")',
        height:"25rem",
        paddingTop:"100px",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
    }
   const submitForm = async (e) => {
       e.preventDefault()
       try {
           const   res =await  axios.post("http://localhost:3000/api/contact", JSON.stringify(contactUs));
           setResponse(res.data.message)
           console.log(res.data.message)
           
       } catch (error) {
           console.log(error, "thethe")
       }

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
                <div className={styles.success}>{response}</div>
                <div className={styles.field}>
                    <input type="text"
                     placeholder="Your Name"
                     value={contactUs.name}
                     onChange={e=> setContactUs({...contactUs, name : e.target.value})}
                     />
                </div>
                <div className={styles.field}>
                    <input type="email"
                     placeholder="Your Email"
                     value={contactUs.email}
                     onChange={e=> setContactUs({...contactUs, email : e.target.value})}
                     />
                </div>
                <div className={styles.field}>
                    <input type="tel"
                     placeholder="Your Phone"
                     value={contactUs.phone}
                     onChange={e=> setContactUs({...contactUs, phone : e.target.value})}
                     />
                </div>
                <div className={styles.field}>
                  <textarea placeholder='Type your message here'
                    value={contactUs.message}
                    onChange={e=> setContactUs({...contactUs, message : e.target.value})}
                  />
                </div>
                <button onClick={submitForm}> Submit</button>
            </form>
            </div>

            <ContactDetails/>
        </div>
     );
}
 
export default Contact;