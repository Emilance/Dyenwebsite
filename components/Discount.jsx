import styles from "../styles/Discount.module.css"
import Image from "next/image";
import Link from "next/link";


const Discount = () => {
    return ( 
        <div className={styles.container} >
            <div className={styles.right}>
                <p>10% OFF</p>
                <h1>LET ENJOY THIS</h1>
                <p> June 10th - December 5th 2023</p>
            </div>
            <div className={styles.image}>
                <Image src="/img/discount.png" alt=""  layout='fill'/>
            </div>
            <div className={styles.left}>
                <p>10% OFF</p>
                <h1>SUMMER DISCOUNT</h1>
                <p> 1 Month Gaurantee</p>
                <Link href="/product">
                <button> SHOP NOW</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Discount;