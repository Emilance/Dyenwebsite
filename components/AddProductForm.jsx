import styles from  "../styles/AddProductForm.module.css"
import {BiArrowBack} from "react-icons/bi"
import { useState } from "react"
import axios from "axios"

const AddProductForm = ({toggleForm, setFormOpen}) => {
  const  [newProduct, setNewProduct] = useState({title: "", collec: "", prices:[],
   desc:"",  file:"" })
   const  {file,title, collec, prices, desc } = newProduct 
   const changePrice = (e, index)=>{
     const currentPrices = prices;
     currentPrices[index] = e.target.value
     setNewProduct({...newProduct, prices : currentPrices})
   }
   const createProduct = async (e) => {
     e.preventDefault()
     const data = new FormData();
     data.append("file", file)
     data.append("upload_preset", "uploads")
     try {
       const uploadRes = await  axios.post("https://api.cloudinary.com/v1_1/eminence222/image/upload", data)
    
       const {url} = uploadRes.data;

       const product= {
         title, 
         collec,
         desc,
        prices,
        img: url 
       };
       await axios.post("http://localhost:3000/api/products", product);
       setFormOpen(false);
     } catch (error) {
       console.log(error)
     }
   }
    return ( 
        <div className={styles.container}>
                <form className={styles.form}>
                <div onClick={toggleForm} className={styles.backArrow}>
                  <BiArrowBack size="100%"/>
                </div>
            <h1>Add New Product</h1>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="title"> Product Title</label>
                        <input type="text" 
                        id="title" 
                        placeholder="title"
                          onChange={e => setNewProduct({...newProduct,  title:e.target.value})}
                        />
                    </div>
                    <div className={styles.field}>
                    <label className={styles.label} htmlFor="collection">Choose Collection</label>
                        <input type="text"
                         id="collection"
                          placeholder="collection"
                          onChange={e => setNewProduct({...newProduct,  collec:e.target.value})}

                          />
                    </div>
                    <div className={styles.field}>
                    <label className={styles.label}>Price for each sizes</label>
                      <div className={styles.sizePrice}>

                        <input type="number"
                         placeholder="small"
                         onChange={e => changePrice(e, 0)}

                         />
                        <input type="number" placeholder="medium"
                     onChange={e => changePrice(e, 1)}

                        />
                        <input type="number" placeholder="large"
                      onChange={e => changePrice(e, 2)}
                        />
                      </div>
                    </div>
                    <div className={styles.textArea}>
                    <label className={styles.label} htmlFor="description"> description</label>
                        <textarea placeholder="write descrition here" 
                       onChange={e => setNewProduct({...newProduct,  desc:e.target.value})}

                        ></textarea>
                    </div>
                    <div className={styles.field}>
                    <label className={styles.label} htmlFor="file"> Choose an image</label>
                        <input type="file"  id="file" 
                             onChange={e => setNewProduct({...newProduct,  file:e.target.files[0]})}
                        />
                    </div>
                    <input  onClick={createProduct} type="submit" value="submit "/>
                </form>
        </div>
     );
}
 
export default AddProductForm;