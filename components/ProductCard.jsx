import Image from "next/image";
import styles from "../styles/productCard.module.css"

const ProductCard = ({ info }) => {
    const {name, image, price} = info;
    return ( 
        <div className={styles.container}>
            <div className={styles.img}>
                <Image src={image}  alt=""  layout="fill"/>
            </div>
            <div className={styles.details}>
                <h4>{name}</h4>
                <p>Price - <span>{price}$</span></p>
            <button> Add to Cart</button>
            </div>



        </div>
     );
}
 
export default ProductCard;