import styles from "../styles/About.module.css"
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const About = ({allProducts}) => {

    return ( 
        <div className={styles.container}>
            <div className={styles.left}>
                   <h1>WHAT DO WE DO</h1>
                   <p>Dyen clothing motivates African youth with various motivational qoutes inscribed on on her clothes, we pass our messages through every single means we could think of , from the meaning of our name,
                        our website, our clothes to our packaging boxes.
                   </p>
                   <p>
                   Majority of african youths have been compelled to believe being born as a black is a detriment to their great aspiration or plan to move the world. Millions of youth as a result of this prefer to seek greener
                    pasture abroad, while some venture into illegal jobs some started internet fraud and cyber crimes <Link href="/about">see more ..</Link>
                   </p>
            </div>
            <div className={styles.right}>
            {allProducts.slice(0, 4).map((img, i) => {
                return(
                <Link href={`/collection/${img.collec}`} key={i}>

                    <div  className={styles.gridImg}>
                        <Image src={img.img}  style={{ borderRadius: "10px" }}  alt={img.title} layout='fill' />
                        <div className={styles.caption}> {img.collec} </div>
                    </div>
                </Link>
                )
            })}
            </div>
        </div>
     );
}
 
export default About;