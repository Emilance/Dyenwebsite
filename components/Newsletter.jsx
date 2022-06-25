import styles from '../styles/Newsletter.module.css';

const Newsletter = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p>Promotions, new products and giveaways, Directly to your inbox</p>
            </div>
            <div className={styles.form}>
                <input type="text" placeholder="Your email" />
                <input type="submit" value="Submit"/>
            </div>
            
        </div>
     );
}
 
export default Newsletter;