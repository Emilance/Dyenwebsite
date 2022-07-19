import Head from 'next/head'
import { useContext, useState } from 'react'
import About from '../components/About'
import AddProductsForm from '../components/AddProductForm'
import Discount from '../components/Discount'
import Navbar from '../components/Navbar'
import Reviews from '../components/Review'
import SlidingBanner from '../components/SlidingBanner'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { logInUser } from './redux/userSlice'
import axios from 'axios'

export default function Home({admin, user, allProducts}) {
     const dispatch = useDispatch()
     dispatch(logInUser(user))

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
           <About  allProducts={allProducts}/>
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
  let admin = false
  let user = false
  if(adminCookie === process.env.TOKEN){
    admin = true
  }
  if(userCookie === process.env.USER_TOKEN){
    user = true
  }
  const products = await axios.get(`http://localhost:3000/api/products`);


return{

  props: {
    admin,
    user,
    allProducts: products.data
  }
}
}



// mongodb+srv://dyenclothing:dyenclothing@cluster0.ha9e5.mongodb.net/?retryWrites=true&w=majoritynp