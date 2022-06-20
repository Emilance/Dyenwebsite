import styles from "../styles/SlidingBanner.module.css"
import banner from "../public/img/Banner1.png"
import Image from "next/image";
import {MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import { useState } from "react";


const SlidingBanner = () => {
    const [bindex, setBindex] = useState(0)
    console.log(bindex)
    const  bannerImg = [
        "/img/1.png",
        "/img/2.png",
        "/img/3.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
        
    ]
   const handleArrowClick = ( x ) =>{
       if(x == 1){
           if(bindex === bannerImg.length - 1 ){
               setBindex(0)
           }else{
               setBindex(bindex + 1)
           }
       }
       if(x == 2){
        if(bindex === 0 ){
            setBindex(5)
        }else{
            setBindex(bindex - 1)
        }
    }
   }


    return ( 
        <div className={styles.container}>
          
            <div className={styles.arrow}   style={{left: 0}}    onClick={()=> handleArrowClick(2)}>
                <MdArrowBackIos size="100%"/>
            </div>
            <div className={styles.arrow}     style={{right: -10}}  onClick={()=> handleArrowClick(1)}>
                <MdArrowForwardIos size="100%"/>
            </div>
            <div className={styles.bannerWrapper} style={{ transform : `translateX(${-100 * bindex}vw)`}}>
             {bannerImg.map((img, i)=> {
            return(
            <div  key={i} className={styles.imgContainer}>       
                  <Image    src={img}  layout="fill"  />
            </div>
            )
             })}
            </div>
        </div>
     );
}
 
export default SlidingBanner;