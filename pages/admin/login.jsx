import axios from "axios";
import { useState } from "react";
import styles from "../../styles/AdminLogin.module.css"
import { useRouter } from "next/router";



const AdminLogin = () => {
    const [admin, setAdmin] = useState({username: null, password: null, error: null})
    const {username, password, error}  =  admin
    const router = useRouter();
    const submitForm = (e) =>{
        e.preventDefault()
    axios.post("https://dyen.vercel.app/api/login", { username, password}).then(
       res => {
           router.push("/admin")
           console.log(res)
       }
     ).catch(err => {
         console.log(err)
         setAdmin({...admin, error: true})
     })
     
    }   
    return ( 
        <div className={styles.container}>
           
          <form className={styles.form} > 
               <div className={styles.field}>
                   <input  type="text"
                     placeholder="username"
                     value={admin.username}
                     onChange={e => setAdmin({...admin, username: e.target.value})}

                     />
               </div>
               <div className={styles.field}>
                   <input  
                   type="password" 
                    placeholder="password"
                    value={admin.password}
                    onChange={e => setAdmin({...admin, password: e.target.value})}
                    />
               </div>
               {error  && <p className={styles.error}>WRONG PASSWORD OR USERNAME</p>}
               <input type="submit" onClick={submitForm} value="LogIn to Admin"/>
          </form>
        </div>
     );
}
 
export default AdminLogin;