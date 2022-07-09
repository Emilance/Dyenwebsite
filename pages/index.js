import Head from 'next/head'
import { useState } from 'react'
import About from '../components/About'
import AddProductsForm from '../components/AddProductForm'
import Discount from '../components/Discount'
import Navbar from '../components/Navbar'
import Reviews from '../components/Review'
import SlidingBanner from '../components/SlidingBanner'
import styles from '../styles/Home.module.css'


export default function Home({admin}) {
  const [formOpen, setFormOpen]  = useState(false)
  const toggleForm =() => {
    setFormOpen(!formOpen)
  }
  return (
    <div className={styles.container}> 
           <Head>
              <title>Dyen</title>
              <meta name="description" content="Dyen company"/>
              <link  rel="icon" href="/favicon.ico"/>
          </Head>
          {formOpen &&   <AddProductsForm       setFormOpen={setFormOpen} toggleForm={toggleForm} /> }
          
           <SlidingBanner/>
           <About/>
           <Discount/>
           <Reviews/>
           {admin && 
           <button  onClick={toggleForm} className={styles.productButton}> Create New Product</button>
           }
 
    </div>
  )
}



export const getServerSideProps = async (context) => {
  const adminCookie = context.req?.cookies
  let admin = false
  if(adminCookie.token === process.env.TOKEN){
    admin = true
  }
return{

  props: {
    admin
  }
}
}



// mongodb+srv://dyenclothing:dyenclothing@cluster0.ha9e5.mongodb.net/?retryWrites=true&w=majoritynp