import Head from 'next/head'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Reviews from '../components/Review'
import SlidingBanner from '../components/SlidingBanner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}> 
           <Head>
              <title>Dyen</title>
              <meta name="description" content="Dyen company"/>
              <link  rel="icon" href="/favicon.ico"/>
          </Head>
           <SlidingBanner/>
           <About/>
           <Reviews/>
 
    </div>
  )
}
