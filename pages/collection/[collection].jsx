import Banner from '../../components/Banner';
import styles from '../../styles/Collection.module.css';
import { productInfo } from '../../components/productInfo';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import CollectionCarousel from '../../components/CollectionCarousel';
import { useRouter } from 'next/router';
import axios from 'axios';

const Collection = ({productList, allProducts}) => {
  const  router = useRouter();
  const  collectionName = router.query.collection
  const collectionInfo = {
      name: collectionName
  }
 
   
    return ( 
        <div className={styles.container}>
            {productList ? 
            
            
            <>
            <Banner  name={collectionInfo.name}  img={productList[0].img}/>
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
                         

                            <ProductCard info={product}/>
                        
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

export const getServerSideProps = async (params) => {
    const collection = params.query.collection

    const res = await axios.get(`http://localhost:3000/api/collections/${collection}`);
    const products = await axios.get(`http://localhost:3000/api/products`);
    return{
        props:{
            productList: res.data,
            allProducts : products.data
        }
    }
}