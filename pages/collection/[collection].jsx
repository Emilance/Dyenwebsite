import Banner from '../../components/Banner';
import styles from '../../styles/Collection.module.css';
import { productInfo } from '../../components/productInfo';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import CollectionCarousel from '../../components/CollectionCarousel';
import { useRouter } from 'next/router';
import axios from 'axios';

const Collection = ({productList}) => {
  const  router = useRouter();
  const  collectionName = router.query.collection
  const collectionInfo = {
      name: collectionName
  }
  console.log(productList)
   
    return ( 
        <div className={styles.container}>
            <Banner  name={collectionInfo.name}  img={productList[0].img}/>
             <CollectionCarousel/>
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
           
        </div>
     );
}
 
export default Collection;

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    return{
        props:{
            productList: res.data
        }
    }
}