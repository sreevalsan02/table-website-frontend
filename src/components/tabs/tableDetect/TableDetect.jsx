import styles from "./tableDetect.module.css"
import { useSelector } from "react-redux";
import RingLoader from "react-spinners/RingLoader"


function TableDetect() {
    const {is_tab_detected,cropped_image} = useSelector(state =>state.tabDetect)

    return (
        <>
            <div className={styles.container} >
                <div className={styles.left} >
                    <img src={cropped_image} alt="cropped image" />
                </div>
                <div className={styles.right}>
                    <h1>detecting </h1>
                        <h1>columns and rows</h1>
                        {is_tab_detected===true &&(<RingLoader color="black" className={styles.ring} />)}

                </div>
            </div>
        </>
    )
}
export default TableDetect;