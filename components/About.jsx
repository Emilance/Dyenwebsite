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
                   <p>Dyen clothing motivates African youth with various motivational qoutes inscribed on on her clothes, we pass our messages through every single means we could think of , from the meaning of our name,
                        our website, our clothes to our packaging boxes.
                   </p>
                   <p>
                   Majority of african youths have been compelled to believe being born as a black is a detriment to their great aspiration or plan to move the world. Millions of youth as a result of this prefer to seek greener
                    pasture abroad, while some venture into illegal jobs some started internet fraud and cyber crimes <a href="/about">see more ..</a>
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