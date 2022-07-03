import styles  from '../styles/Cart.module.css'
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import {BiTrash}  from 'react-icons/bi'
import  { reset } from "./redux/cartSlice"


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
     console.log(cart)

    return ( 
        <div className={styles.container}>  
        <h1>My Cart</h1>  
            <div className={styles.cartContainer} >
                <table className={styles.table} >
                    <thead>

                    <tr className={styles.trow}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>size</th>
                        <th>Quantity</th>
                        <th>Total</th>    
                    </tr>
                    </thead>

                        {cart.products.map((product, i) => {
                            return(
                    <tbody   key={i}>

                    <tr>
                        <td>
                          <div className={styles.productImg}>
                            <Image src={product.img} alt="{name}"  layout="fill"/>
                          </div>
                        </td>

                        <td>
                            <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.price} </span>
                        </td>
                        <td>
                            <span className={styles.size}>{product.size}</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                            <span className={styles.total}> {product.price * product.quantity}</span>
                        </td>
                        <td>
                            <div className={styles.deleteIcon}>
                                <BiTrash size="100%"/>
                            </div>
                        </td>
                    </tr>
                    </tbody>


                            )
                        })}
                </table>
            </div>
            <div className={styles.bottomDiv}>

            <div className={styles.checkOutCon}>
                <p>SubTotal - <span>${cart.total}</span></p>
                <p>Discount - <span>#{0.05 * cart.total}</span></p>
                <p>Total - <span>${cart.total - 0.05 * cart.total}</span></p>
                <button className={styles.checkout}>Check Out</button>
            </div>
            </div>

        </div>
     );
}
 
export default Cart;
