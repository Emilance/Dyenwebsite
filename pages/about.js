import Banner from "../components/Banner";
import styles from "../styles/aboutPage.module.css"
import Image from "next/image";


const About = () => {

    return ( 
        <div className={styles.container}>
            <Banner
             name="About Us"
             img="/img/Afric2.png"
            />
             <div className={styles.aboutCon}>
                 <div className={styles.section}>
                    <div className={styles.imgContainer}>
                        <Image src="/img/boy.png"  layout="fill"  alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>WHO ARE WE ?</h2>
                        <p>Dyen is a clothing brand founded by her current CEO, Alabi Elijah  whose motivation
                             emanated from his ambition to inspire africa youths, gear them up and trigger their aspirations toward legal and great exploitations

                        </p>
                    </div>

                    
                 </div>

                 <div className={styles.section}>
                    <div className={styles.imgContainer}>
                        <Image src="/img/girl.png"  layout="fill"  alt="" />
                    </div>
                    <div className={styles.textContainer}>
                       
                        <p>It is unfortunate to know that due to the notion that the continent has been nicknamed to be the origin off illegalities,
                            many african youths has been compelled to believe being born as a black is a detriment to their great aspiration or plan to 
                            move the world.
                            Millions of youth as a result of this prefer to seek greener pasture abroad, while some venture into illegal jobs some 
                            started internet fraud and cyber crimes
                        </p>
                    </div>     
                 </div>
              
                 <div className={styles.section}>
                    <div className={styles.imgContainer}>
                        <Image src="/img/boy2.png"  layout="fill"  alt="" />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>WHO ARE WE ?</h2>
                            <p>Dyen is a clothing brand founded by her current CEO, Alabi Elijah  whose motivation
                             emanated from his ambition to inspire africa youths, gear them up and trigger their aspirations toward legal and great exploitations

                            </p>
                    </div>
              </div>
             </div>
        </div>
     );
}
 
export default About;