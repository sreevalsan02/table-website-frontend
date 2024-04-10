import styles from "./Uploading.module.css"
import { useSelector } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader"

function UploadingFirst({index}) {

    const {selected,image} = useSelector(state => state.imageSelected)
    return(
        <>
        <div className={styles.container} style={{display:(selected)?"flex":"none"}}>
            
            <div className ={styles.left}><h1>Uploading...</h1>
            {index===1 &&(<FadeLoader color="white" className={styles.ring}/>)}
            </div>
            <div  className = {styles.right} style={{backgroundImage :`url(${image})`}}></div>
        </div>
        </>
    )
}
export default UploadingFirst;