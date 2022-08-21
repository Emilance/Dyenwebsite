

import {SiMarketo}  from "react-icons/si"
import { FaShoppingCart }  from "react-icons/fa"
import { IoMdSave, IoMdSettings }  from "react-icons/io"
import { MdDashboard }  from "react-icons/md"

import styles  from '../../styles/Sidebar.module.css'

           
  
const SideBar = () => {
    return ( 
        <div className={styles.sidebar}>
              <div className={styles.logoContainer}>
                  <SiMarketo size="25"/>
              </div>
              <div className={styles.widgetContainer}>
                 <MdDashboard size="20" className={styles.selected }  />
                 <FaShoppingCart  size="20" className={styles.widgetIcon}  />
                 <IoMdSave  size="20" className={styles.widgetIcon}  />
                 <IoMdSettings size="20" className={styles.widgetIcon}  />

              </div>
        </div>
     );
}
 
export default SideBar;