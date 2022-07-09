import axios from "axios";
import { useState } from "react";
import styles from "../styles/SignInForm.module.css"


const SignInForm = () => {

    const [user, setUser] =useState({fullName:"", email:"", password: "", confirmPassword: "" })
    const [error, setError] = useState(null);

    const {fullName, email, password, confirmPassword} = user
    const createUser = async(e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
                setError("Ensure the two passwords match ")
            
        }
        else {


            try {          
                res = await axios.post("http://localhost:3000/api/user",  user);
                console.log(res)
            } catch (error) {
                console.log(error);            
            }
        }
    }
  console.log(error)
    return ( 
        <div className={styles.container}>
            <form className={styles.form}> 
                <div className={styles.field}>
                     <input type="text"
                      placeholder="Your Full Name"
                      value={user.fullName}
                      onChange={e => setUser({...user, fullName: e.target.value})}
                      />
                 </div>
                 <div className={styles.field}>
                     <input type="email"
                     placeholder="Email"
                     value={user.email}
                      onChange={e => setUser({...user, email: e.target.value})}
                     />
                 </div>
                 <div className={styles.field}>
                     <input type="password" 
                     placeholder="Password"
                     value={user.password}
                      onChange={e => setUser({...user, password: e.target.value})}
                     />
                 </div>
                 <div className={styles.field}>
                     <input type="password"
                      placeholder="Confirm Password"
                      value={user.confirmPassword}
                      onChange={e => setUser({...user, confirmPassword: e.target.value})}
                      />
                 </div>
                 <input  onClick={createUser} type="submit" value="REGISTER"/>
                 
            </form>
        </div>
     );
}
 
export default SignInForm;