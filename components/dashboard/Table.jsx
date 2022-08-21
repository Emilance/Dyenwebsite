
import  styles from "../../styles/table.module.css"
import Image from "next/image";

const Table =({productList}) => {
    
    return (
        <div  className={styles.tableCon}>
              
             <table className={styles.table}>
                 <thead>
                    <tr>
                        <th>No</th>
                        <th></th>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Sold</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                            {productList.map((product, i) => {

                 return(
                        <tr key={i} >

                                <td>{product.i}</td>
                                <td className={styles.image}>
                                    <Image  className={styles.tableimg} src={product.img}  layout="fill" alt="" />
                                </td>
                                <td> {product.title}</td>
                                <td>active</td>
                                <td>10</td>
                                <td>120</td>
                        </tr>
                                )
                            })}
                    </tbody>
             </table>

       </div>
    )
}

export default Table