import styles from "../styles/Reviews.module.css"
import {MdArrowBackIos, MdArrowForwardIos}  from "react-icons/md"
import Image from "next/image";
import { useRef } from "react";
const Reviews = () => {
    const carousel = useRef()
    const cardContent =[
        {
            img:"/img/user1.png",
            name:"Damilola Daniel",
            location:"Ijebu Ode",
            reviews:" Wow this is a great platform, I have been looking for a platform like this since 2199, I  enjoy their service",
        },
        {
            img:"/img/user2.jpg",
            name:"Femi Aronimo",
            location:"Ijebu Igbo",
            reviews:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur repellendus totam veritatis enim esse.",
        },
        {
            img:"/img/avatar.png",
            name:"Elijah Opulence",
            location:"Ijebu Ode",
            reviews:"Excelent service, my socks what dyed exactly as I desire",
        },
        {
            img:"/img/avatar.png",
            name:"Folashade Joy",
            location:"Ilorin",
            reviews:"🤥 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur repellendus totam veritatis enim esse.",
        },
        {
            img:"/img/avatar.png",
            name:"Success Beebee",
            location:"Obalende",
            reviews:"Dyen is great, but I wont give you 100%, I will rather give you 60% percent because you deliver my cloth lately",
        },
     
            {
                img:"/img/user1.png",
                name:"Damilola Daniel",
                location:"Ijebu Ode",
                reviews:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur repellendus totam veritatis enim esse.",
            },
            {
                img:"/img/user2.jpg",
                name:"Femi Aronimo",
                location:"Ijebu Igbo",
                reviews:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur repellendus totam veritatis enim esse.",
            },
            {
                img:"/img/avatar.png",
                name:"Elijah Opulence",
                location:"Ijebu Ode",
                reviews:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima aspernatur repellendus totam veritatis enim esse.",
            },
    ]

    const slidecarousel =(x) => {
          if(x== 1 ){
              carousel.current.scrollLeft += 200
          }
         else  if(x== 2 ){
            carousel.current.scrollLeft -= 200
        }
    }
    
    return ( 
        <div className={styles.container}>
                             <div className={styles.arrow}   style={{left: "7%"}}    onMouseDown={()=> slidecarousel(2)}>
                               <MdArrowBackIos  size="100%"/>
                           </div>
                           <div className={styles.arrow}     style={{right: "7%"}}  onMouseDown={()=> slidecarousel(1)}>
                               <MdArrowForwardIos  size="100%"/>
                           </div>
            <h2>What People are Saying About Us</h2>
            <div className={styles.cardContainer} ref={carousel}>
                    {cardContent.map((content, i)=> {
                        return (
                            <div  key={i} className={styles.card}>

                            <div className={styles.upperCard}>
                                <div className={styles.cardImg}>
                                    <Image src ={content.img} alt="" style={{borderRadius: "20px"}} layout="fill" />
                                </div>
                                    <div className={styles.imgDetails}>
                                        <p>{content.name} </p>
                                        <h5>{content.location} </h5>
                                    </div>
                                </div>
                                <div className={styles.cardContent}> {content.reviews} </div>
                            
                        </div>
                            )
                        })}
                      
                        </div>
        </div>
     );
}
 
export default Reviews;