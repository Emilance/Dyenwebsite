import Image from "next/image";
import styles from "../styles/productCard.module.css"

const ProductCard = ({ info }) => {
    const {title, img, prices} = info;
    return ( 
        <div className={styles.container}>
            <div className={styles.img}>
                <Image src={img}  alt=""  layout="fill"/>
            </div>
            <div className={styles.details}>
                <h4>{title}</h4>
                <p>Price - <span>{prices}$</span></p>
            <button> Add to Cart</button>
            </div>



        </div>
     );
}
 
export default ProductCard;