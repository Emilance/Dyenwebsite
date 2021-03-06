import styles from "../../styles/Product.module.css"
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";


const Product = ({product}) => {
   const [order, setOrder] =useState({size: "", quantity: "1"})
   const [price, setPrice] = useState(product.prices[0])
   const dispatch  = useDispatch()
   const { quantity, size } = order


    const {title, prices, img, desc} = product;
    const handleSizeClick = (x) => {
            setPrice(product.prices[x])
    }
    const  handleAddCartClick = () => {
            dispatch(addProduct({...product, size, price, quantity}))
    }
    return ( 
        <div className={styles.container}>
          

            <div className={styles.product}>
                <div className={styles.productsImg}>
                     <Image src={img} alt={title}  layout="fill"/>
                </div>
                <div className={styles.productDetails}>
                         <h1>{title}</h1>
                         <hr/>
                         <h3>Price - <span>${price}</span></h3>
                         <p>{desc}</p>
                  
                         <div className={styles.variant}>
                             <div className={styles.size}  value={order.size} onChange={e => setOrder({...order, size : e.target.value})}>
                                <input type='radio' name='size' value='small' onClick={() => handleSizeClick(0)}  id='small'/>
                                <label htmlFor='small'>small</label>
                   
                                 <input type='radio' value='medium' name='size'  onClick={() => handleSizeClick(1)} id='medium'/>
                                <label htmlFor='medium'>medium</label>
                      

                                <input type='radio' name='size' value='large'  onClick={() => handleSizeClick(2)} id='large'/>
                               <label htmlFor='large'>large</label>
                             </div>
                         </div>
                         <div className={styles.CTAContainer}>
                             <input
                              type="number"
                               value={order.quantity}
                               onChange={e => setOrder({...order, quantity :e.target.value})}
                               />
                             <button onClick={handleAddCartClick} >Add To Cart</button>
                         </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;


export const getServerSideProps =  async ({params}) => {
    console.log(params.id)
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return{
        props:{
            product: res.data
        }
    }
}