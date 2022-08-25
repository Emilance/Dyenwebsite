import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import About from '../components/About'
import AddProductsForm from '../components/AddProductForm'
import Discount from '../components/Discount'
import Navbar from '../components/Navbar'
import Reviews from '../components/Review'
import SlidingBanner from '../components/SlidingBanner'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { logInUser } from '../store/userSlice'
import axios from 'axios'
import useSWR from "swr";

export default function Home({admin, user}) {
  const [allProducts, setAllProducts] = useState([])
     const dispatch = useDispatch()

     const getProducts  = async () => {
      const res = await fetch('/api/products');
     const products = await res.json()
     console.log(products)
     setAllProducts(products)
       
    }

    useEffect(() => {
      getProducts()
  
    },[])   

  useEffect(() => {
    dispatch(logInUser(user))
  },[])   


  const [formOpen, setFormOpen]  = useState(false)
  const toggleForm =() => {
    setFormOpen(!formOpen)
  }
 
  console.log(allProducts)
  return (
    <div className={styles.container}> 
           <Head>
              <title>Dyen</title>
              <meta name="description" content="Dyen company"/>
              <link  rel="icon" href="/favicon.ico"/>
          </Head>
          {formOpen &&   <AddProductsForm       setFormOpen={setFormOpen} toggleForm={toggleForm} /> }
          
           <SlidingBanner/>
           {allProducts &&
           <About  allProducts={allProducts}/>
           }
     
           <Discount/>
           <Reviews/>
           {admin && 
           <button  onClick={toggleForm} className={styles.productButton}> Create New Product</button>
           }
 
    </div>
  )
}



export const getServerSideProps = async (context) => {

  const cookies = context.req?.cookies
  const adminCookie = cookies.token
  const userCookie = cookies.userToken
  const hostname = context.req.headers.host

  let admin = false
  let user = false
  if(adminCookie === process.env.TOKEN){
    admin = true
  }
  if(userCookie === process.env.USER_TOKEN){
    user = true
  }

return{

  props: {
    admin,
    user,
 
  }
}
}




// mongodb+srv://dyenclothing:dyenclothing@cluster0.ha9e5.mongodb.net/?retryWrites=true&w=majoritynp