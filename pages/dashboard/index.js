import styles  from "../../styles/dashboard.module.css"

import {BsHandbagFill,
         BsFillCartDashFill,
         BsFillEyeFill
      } from  "react-icons/bs"
import { FaUserFriends}  from "react-icons/fa"
import  {AiOutlineFall, AiOutlineRise} from "react-icons/ai"

import SideBar from '../../components/dashboard/Sidebar';

import ViewStat from '../../components/dashboard/ViewStat';
import Table from '../../components/dashboard/Table';
import RightBar from '../../components/dashboard/RightBar';
import axios from "axios";


function dashboard({productList}) {
  return (
    <div className={styles.App}>
     <SideBar/>
     <div className={styles.dashboard}>
 
      <div className={styles.Rdashboard}>

      <div className={styles.upperstat}>
        <ViewStat
          LeftIcon= {BsFillEyeFill}
          RightIcon = {AiOutlineRise}
          title="Total Views"
          total = {308.402}
          date ="Start from Jan 1, 2021"  
          first = {true}     
        />
         <ViewStat
          LeftIcon= {BsHandbagFill}
          RightIcon = {AiOutlineFall}
          title="Total Products"
          total = {10.820}
          date ="Add new products"       
        />
         <ViewStat
          LeftIcon= {FaUserFriends}
          RightIcon = {AiOutlineRise}
          title="Total Users"
          total = {8.425}
          date ="New user noted every week"       
        />
         <ViewStat
          LeftIcon= {BsFillCartDashFill}
          RightIcon = {AiOutlineRise}
          title="Total Sells"
          total = {1028623}
          date ="Start from Jan 1, 2021"       
        />
      </div>
      <div className={styles.bottomstat}>
        <Table productList={productList}/>
        <RightBar/>
      </div>

      </div>
     </div>
    </div>
  );
}

export default dashboard;


export const getServerSideProps = async () => {

    const res = await axios.get("http://localhost:3000/api/products");
    return{
        props:{
            productList: res.data
        }
    }
}
