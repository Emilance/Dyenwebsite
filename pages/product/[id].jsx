import styles from "../../styles/Product.module.css"
import Image from "next/image";


const Product = () => {
    const productDetail = {
        name: "Adult Nigerian Tye and Dye Shirt",
        price: "100",
        img: "/img/hoodies.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ut repudiandae sapiente ullam! Magnam autem, amet laudantium laboriosam repellat officia iste incidunt at similique est aliquam iusto sequi architecto exercitationem. "

    }

    const {name, price, img, description} = productDetail
    return ( 
        <div className={styles.container}>
            <div className={styles.navSpace}>
                
            </div>

            <div className={styles.product}>
                <div className={styles.productsImg}>
                     <Image src={img} alt={name}  layout="fill"/>
                </div>
                <div className={styles.productDetails}>
                         <h1>{name}</h1>
                         <hr/>
                         <h3>Price - <span>{price}$</span></h3>
                         <p>{description}</p>
                         <div className={styles.variant}>
                             <div className={styles.size}>
                                <input type='radio' name='size' value='small'  id='small'/>
                                <label htmlFor='small'>small</label>
                   
                                 <input type='radio' value='medium' name='size' id='medium'/>
                                <label htmlFor='medium'>medium</label>
                      

                                <input type='radio' name='size' value='large' id='large'/>
                               <label htmlFor='large'>large</label>
                             </div>
                         </div>
                         <div className={styles.CTAContainer}>
                             <input type="number" defaultValue='1'/>
                             <button >Add To Cart</button>
                         </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;