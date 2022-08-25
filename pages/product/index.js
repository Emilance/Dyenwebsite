import Banner from '../../components/Banner';
import styles from '../../styles/Collection.module.css';
import { productInfo } from '../../components/productInfo';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import CollectionCarousel from '../../components/CollectionCarousel';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Collection = () => {

  const  router = useRouter();
  const [allProducts, setAllProducts] = useState([])
  const getProducts  = async () => {
    const res = await fetch('/api/products');
   const products = await res.json()

   setAllProducts(products)
     
  }

  useEffect(() => {
    getProducts()

  },[allProducts])  

  console.log(allProducts)
   
    return ( 
        <div className={styles.Pcontainer}>
            <h1>ALL PRODUCTS</h1>
            <div className={styles.filter}>
                <select  >
                    <option value="relevance">relevance</option>
                    <option value="latest">latest</option>
                    <option value = "alphabetical">alphabetical</option>
                </select>
            </div>

            <div className={styles.productContainer}>
                {(allProducts.length > 0 )  ? allProducts.map((product, i) => {
                    return (
                        <Link  key={i} href={`/product/${product._id}`}>
                         <a>

                            <ProductCard info={product}/>             
                         </a>
                        </Link>
                    )
                })
            :
            <h1>Loading ....</h1>
            }
            </div>
           
        </div>
     );
}
 
export default Collection;

