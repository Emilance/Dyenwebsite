import styles from "../../styles/Admin.module.css"
import Image from "next/image";
import axios from "axios";
import { BiTrash} from "react-icons/bi"
import { useState } from "react";
import  { useRouter } from "next/router";

const Admin = ({productList}) => {
 const   router = useRouter()
    const [deleteReport, setDeleteReport] = useState(null)
    const deleteProduct = async(id) => {
        try {
            res = await axios.delete(`http://localhost:3000/api/products/${id}`)    
                setDeleteReport(res);
               router.replace("/")
           
        } catch (error) {
            console.log(error)
        }

    }
   console.log(productList)
    return ( 
        <div className={styles.container} >
            <div className={styles.productcon}>



                   <h1>Products</h1>
                <table className={styles.table} >
                   <thead>
                    <tr className={styles.trow}>
                        <th>Image</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>   
                    </tr>
                    </thead>
                    {productList &&
                   ( productList.map((product, i) => {
                    return(
                    <tbody  key={i}>
                    <tr >
                        <td className={styles.imgCon}>
                          <div className={styles.productImg}>
                            <Image src={product.img} alt={product.title} layout="fill"/>
                          </div>
                        </td>
                        <td>
                            <span className={styles.id}>{product._id.slice(0,10)}...</span>
                        </td>
                        <td>
                            <span className={styles.title}>{product.title} </span>
                        </td>
                        <td>
                            <span className={styles.price}>{product.prices[0]}</span>
                        </td>
     
                        <td>
                            <div className={styles.deleteIcon}>
                             <button className={styles.button} >Edit</button>
                             <div  onClick={() =>deleteProduct(product._id)} className={styles.trashIcon}>
                                <BiTrash size="100%"/>
                            </div>
                            </div>
                        </td>   
                      </tr>
                      </tbody>
                    )
                    }))
                }
                </table>
                {deleteReport &&   <p className={styles.notification}>jj{deleteReport}</p> }
               
                   <h1>Orders</h1>
                <table className={styles.table} >
                   <thead>
                    <tr className={styles.trow}>
                        <th>Id</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>   
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        <td className={styles.imgCon}>
                        <span className={styles.id}>622hd..</span>
                        </td>

                        <td>
                            <span className={styles.customer}>John Doe</span>
                        </td>
                        <td>
                            <span className={styles.total}>$32</span>
                        </td>
                        <td>
                            <span className={styles.payment}>Paid</span>
                        </td>
                        <td>
                            <span className={styles.status}>Status</span>
                        </td>    

                        <td>
                            
                             <button className={styles.button} >Next stage</button>
                            
                        </td>   
                      </tr>
                      </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Admin;

export const getServerSideProps = async (context) => {
    const adminCookie =context.req?.cookies  || ""
    if(adminCookie.token !== process.env.TOKEN){
        return{
            redirect:{
                destination:"/admin/login",
                permanent:false
            }
        }
    }
    const res = await axios.get("http://localhost:3000/api/products");
    return{
        props:{
            productList: res.data
        }
    }
}