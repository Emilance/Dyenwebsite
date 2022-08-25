import styles from '../styles/CollectionCarousel.module.css'
import {MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import { useRef } from 'react';
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/productSlice';


const CollectionCarousel = ({productList}) => {
      const carousel = useRef()
      const dispatch = useDispatch()
      let collection = []
      if(productList.length > 0){
          productList.map(e => {
              collection.push(e.collec)
          })
      }
      const uniqueCollection= [...new Set(collection)]
      dispatch(getProducts({...productList, uniqueCollection}))
    const handleArrowClick = (x) => {
       if(x===1) {
           carousel.current.scrollLeft  += 200;
       } else if (x===2) {
        carousel.current.scrollLeft  -= 200;
    }
    }
    return ( 
        <div className={styles.container}>
            <h3>Navigate to Collection</h3>
            <div className={styles.arrow}   style={{left: '10%'}}    onClick={()=> handleArrowClick(2)}>
                <MdArrowBackIos size="100%"/>
            </div>
            <div className={styles.arrow}     style={{right: '10%'}}  onClick={()=> handleArrowClick(1)}>
                <MdArrowForwardIos size="100%"/>
            </div>
            <div ref={carousel} className={styles.CollectionContainer}>
               {uniqueCollection.map((item, i)=> {
                   return(
                       <Link href={`/collection/${item}`} key={i}>
                         <div className={styles.collectionCard}>
                              {item}
                        </div>
                       </Link>

                   )
               })}
            </div>
        </div>
     );
}
 
export default CollectionCarousel;