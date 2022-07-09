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
         
                    <div className={styles.textContainer}>
                       
                            <p>Meanwhile being  an africa doesn't make anyone less privilegde, Dyen clothing motivates African youth with various motivational qoutes inscribed on 
                                on her clothes, we pass our messages yhrough every single means we could think of , from the meaning of our name,  our website, our clothes to our packaging boxes.
                            </p>
                            <p>
                              <span>DYEN</span>   is derived from the word <span>DYNASTY</span> and <span>YEARN</span>

                              DYNASTY - meaning  a lineage or family.
                              YEARN   - Depicting the act of longing for a thing
                              DYEN -- YEARNING FOR DYNASTY
                            </p>
                    </div>
              </div>
             </div>
        </div>
     );
}
 
export default About;