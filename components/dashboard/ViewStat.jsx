
import styles from "../../styles/ViewStat.module.css"
import { IconType } from "react-icons"


const ViewStat = (props) =>{
    const {title, total, date, LeftIcon, RightIcon, first } = props
    const { viewstatContainer,  firstContainer } =styles
 return(
     <div className={styles.viewstatContainer}>
         <div  className={styles.upper} >
             <div className={styles.iconCon} >
                  <LeftIcon size="25"/>
             </div>
             <div className={styles.iconCon}>
                 <RightIcon size="33"/>
             </div>
         </div>
         <div className={styles.details}>
             <p >{title}</p>
             <h1> {total}</h1>
             <hr/>
             <p>{date}</p>
         </div>
     </div>
 )
}

export default ViewStat