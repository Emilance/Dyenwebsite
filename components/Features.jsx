import styles from "../styles/Features.module.css"
import Image from "next/image";


const Features = () => {
    imageList = [
        "/img/"
    ]
    
    return (  
        <div className={styles.container}>
            <div className={styles.imageGrid}>
                <Image src="" alt=""/>
            </div>
        </div>
    );
}
 
export default Features;