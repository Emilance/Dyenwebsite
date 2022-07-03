import styles from '../styles/CollectionCarousel.module.css'
import {MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import { useRef } from 'react';
import Link from "next/link";


const CollectionCarousel = ({productList}) => {
      const carousel = useRef()
      const CollectionList =[
          {
              name : "HAT",
              url: "/collection/HAT",  
          },
         {
            name : "SCHOOL WEAR",
            url: "/collection/SCHOOL WEAR",  
        },
        {
            name : "SPORT",
            url: "/collection/SPORT WEAR",  
        },
        {
            name : "SNEAKERS",
            url: "/collection/SNEAKERS",  
        },
        {
            name : "FACE CAP",
            url: "/collection/FACE CAP",  
        },
        {
            name : "HEAD BAND",
            url: "/collection/HEAD BAND",  
        },
        {
            name : "HOODIES",
            url: "/collection/HOODIES",  
        },
      ]

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
               {productList.map((item, i)=> {
                   return(
                       <Link href={`/collection/${item.collec}`} key={i}>
                         <div className={styles.collectionCard}>
                              {item.collec}
                        </div>
                       </Link>

                   )
               })}
            </div>
        </div>
     );
}
 
export default CollectionCarousel;