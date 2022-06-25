import Banner from '../../components/Banner';
import styles from '../../styles/Collection.module.css';
import { productInfo } from '../../components/productInfo';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';
import CollectionCarousel from '../../components/CollectionCarousel';
import { useRouter } from 'next/router';

const Collection = () => {
  const  router = useRouter();
  const  collectionName = router.query.collection
  const collectionInfo = {
      name: collectionName
  }
    
    return ( 
        <div className={styles.container}>
            <Banner  name={collectionInfo.name}/>
             <CollectionCarousel/>
            <div className={styles.filter}>
                <select  >
                    <option value="relevance">relevance</option>
                    <option value="latest">latest</option>
                    <option value = "alphabetical">alphabetical</option>
                </select>
            </div>

            <div className={styles.productContainer}>
                { productInfo.map((product, i) => {
                    return (
                        <Link  key={i} href="/product/45">
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