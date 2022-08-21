
import { AiTwotoneCheckSquare} from "react-icons/ai"

import styles  from '../../styles/RightBar.module.css'
import BarChart from "./BarChart"

const RightBar =() => {
    return (
        <div className={styles.rightBar} >
            <div className={styles.chartDetails}>
                <div className={styles.top}>
                    <h4>Views $ Sells</h4>
                    <select className={styles.select}>
                        <option value="This week">This Week</option>
                        <option value="Last week">Last Week</option>
                        <option value="All">All</option>
                    </select>
            
                </div>
                <div className={styles.bottom} > 
                   <h5>
                       <AiTwotoneCheckSquare size="20"/>
                        Total Views
                    </h5>
                   <h5>
                   <AiTwotoneCheckSquare size="20"/>
                        Total Sells
                   </h5>
                </div>
             </div>
            <div className={styles.chartContainer}>
                    <BarChart/>
            </div>
        </div>
    )
}

export default RightBar