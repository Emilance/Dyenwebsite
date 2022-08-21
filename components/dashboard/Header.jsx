
import { BiSearch} from "react-icons/bi"
import  { BsChatDots} from "react-icons/bs"
import { IoMdNotificationsOutline  }  from "react-icons/io"
import styles from "../../styles/Dheader.module.css"

const  Header = () =>  {
    return(
        <div className={styles.header}>
             <div className={styles.searchContainer}>
                 <BiSearch className={styles.searchIcon} size="25"/>
                 <input type="text" placeholder="search for transaction, item, etc"/>
                 <button>Search</button>
             </div>
        <div className={styles.rightHeader}>
            <div className={styles.headerIcon}>
             <BsChatDots  size="22"/>
            </div>
            <div className={styles.headerIcon}>
             <IoMdNotificationsOutline size= "22" />
            </div>
            <div className={styles.dpContainer}>
                <img src="/Emilance.png" className={styles.dp} alt="admin"/>
            </div>
        </div>
        </div>
    )
}

export default Header