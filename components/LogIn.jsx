import { useState } from 'react';
import styles from '../styles/LogIn.module.css'
import SignInForm from './SignInForm';
import { BiArrowBack} from 'react-icons/bi'


const LogIn = ({toggleLogIn}) => {
    const [Form, setForm] = useState("logIn")

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
            <div onClick={toggleLogIn} className={styles.backArrow}>
                <BiArrowBack size="100%"/>
            </div>
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
                     <input type="text" placeholder="Email"/>    
                     <input type="password" placeholder="password"/>
                 <input type='submit'  value="SUBMIT"/>
            </form> 
             </>
           }
            </div>
        </div>
     );
}
 
export default LogIn;
<div className={styles.container}>

</div>