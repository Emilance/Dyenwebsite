import Banner from '../../components/Banner';
import styles from '../../styles/Collection.module.css';
import { productInfo } from '../../components/productInfo';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import CollectionCarousel from '../../components/CollectionCarousel';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Collection = () => {
  const  router = useRouter();
  const  collectionName = router.query.collection
  const collectionInfo = {
      name: collectionName
  }

  const  [allProducts, setAllProducts] = useState([])
  const [productList, setProductList] = useState([])

//fetching product base on categories 

  const getProduct  = async () => {
  const res = await fetch('/api/products');
  const res2 = await fetch(`/api/collections/${collectionName}`);
   const allProductsRes = await res.json()
   const productListRes = await res2.json()

    setAllProducts(allProductsRes)
    setProductList(productListRes)
     
  }

  useEffect(() => {
    getProduct()

  },[allProducts, productList])  
 
    return ( 
        <div className={styles.container}>
            {productList ? 
            
            
            <>
            {(productList.length > 0) &&
            
            <Banner  name={collectionInfo.name}  img={productList[0].img}/>
            }
             <CollectionCarousel  productList={allProducts}/>
            <div className={styles.filter}>
                <select  >
                    <option value="relevance">relevance</option>
                    <option value="latest">latest</option>
                    <option value = "alphabetical">alphabetical</option>
                </select>
            </div>

            <div className={styles.productContainer}>
                { productList.map((product, i) => {
                    return (
                        <Link  key={i} href={`/product/${product._id}`}>
                         <a>
                            <ProductCard info={product}/>

                         </a>

                        
                        </Link>
                    )
                })}
            </div>
            </>
            :
            <h1> LOADING.......</h1>
            }
           
        </div>
     );
}
 
export default Collection;

