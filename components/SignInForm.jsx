import styles from "../styles/SignInForm.module.css"


const SignInForm = () => {
    return ( 
        <div className={styles.container}>
            <form className={styles.form}> 
                <div className={styles.field}>
                     <input type="text" placeholder="Your Full Name"/>
                 </div>
                 <div className={styles.field}>
                     <input type="email" placeholder="Email"/>
                 </div>
                 <div className={styles.field}>
                     <input type="password" placeholder="Password"/>
                 </div>
                 <div className={styles.field}>
                     <input type="password" placeholder="Confirm Password"/>
                 </div>
                 <input type="submit" value="REGISTER"/>
                 
            </form>
        </div>
     );
}
 
export default SignInForm;