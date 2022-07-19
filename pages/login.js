import { useState } from 'react';
import styles from '../styles/LogIn.module.css'
import { BiArrowBack} from 'react-icons/bi'
import SignInForm from '../components/SigninForm';


const LogIn = () => {
    const [Form, setForm] = useState("logIn")
    const [loginData, setLoginData]  = useState({ email :"", password: ""})

    const switchForm =(x) => {
        if(x === 1  && Form == "signIn"){
          setForm("logIn")
        }else if (x === 2 && Form == "logIn"){
            setForm("signIn")
        }
        else return 0
    }
    return ( 

        <div className={styles.container}>
            
            <div className={styles.formContainer}>
                <div className={styles.header}>
                    <div onClick={() => switchForm(1)} className={styles.subHeader}>
                        LOGIN
                    </div>
                    <div onClick={() => switchForm(2)}  className={styles.subHeader}>
                        SIGNIN
                    </div>
                </div>
            
           {Form == "signIn" && <SignInForm/>}
           {Form == "logIn"  && 
           
            <>
            <form className={styles.form} >
                     <input type="text"
                      placeholder="Email"
                      value={loginData.email}
                      onChange={e => setLoginData({...loginData, email: e.target.value})}
                      />    
                     <input type="password" 
                     placeholder="password"
                     value={loginData.password}
                     onChange={e => setLoginData({...loginData, password: e.target.value})}
                     />
                 <input type='submit'  value="SUBMIT"/>
            </form> 
             </>
           }
            </div>
        </div>
     );
}
 
export default LogIn;
