import styles from "../styles/About.module.css"
import Image from "next/image";
import Link from "next/link";

const About = () => {
    const   gridImg  = [
        {
            image: "/img/hat.png",
            alt :"HAT CATALOGUE",
            url :"collection/HAT"
        },     
        {
            image:  "/img/school.jpg",
            alt :"SCHOOL WEAR COLLECTION",
            url:"collection/SCHOOL WEAR"
        },
        {
            image:"/img/sport.jpg",
            alt :" SPORT WEAR COLLECTION",
            url : "collection/SPORT WEAR"
        },
        {
            image: "/img/sneekers.png",
            alt :"SNEAKERS COLLECTIONS",
            url : "collection/SNEAKERS"
        },

        
        
         
        
         
    ]
    return ( 
        <div className={styles.container}>
            <div className={styles.left}>
                   <h1>WHAT DO WE DO</h1>
                   <p>We are starting  a new service where you re allowed to send us your clothes for tie dying, all you have to do is send us your clothes and tell us sime colors you might like on 
                       the clothes then the rest is history
                   </p>
                   <p>
                       The most interesting part is no one really knows the result of a tie and dyed clothes( you might have an idea of how it might turn out but not fully) this will give us an opportunity to always 
                       hit you with a surprise
                   </p>
            </div>
            <div className={styles.right}>
            {gridImg.map((img, i) => {
                return(
                <Link href={img.url} key={i}>

                    <div  className={styles.gridImg}>
                        <Image src={img.image}  style={{ borderRadius: "10px" }}  alt={img.alt} layout='fill' />
                        <div className={styles.caption}> {img.alt} </div>
                    </div>
                </Link>
                )
            })}
            </div>
        </div>
     );
}
 
export default About;