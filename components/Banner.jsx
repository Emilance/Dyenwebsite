import styles from  '../styles/Banner.module.css'



const Banner = ({name,  img}) => {
    const style = {
        backgroundImage:` linear-gradient( #0000006f 70%, #000000e1 90%),  url(${img})`,
        height:'25rem',
        width:'100vw',
        backgroundPosition:"center center",
        backgroundAttachment:"fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover"
    }
    return ( 
        <div className={styles.container}  style={style}>
            <div className={styles.title}>
                <h1>{name}</h1>
            </div>
        </div>
     );
}
 
export default Banner;