import "./carousel.css"

import TabInput from "../tabs/tabInput/TabInput"
import TableDetect from "../tabs/tableDetect/TableDetect"
import { useState } from "react";

export default function Carousel() {
    const variable1 = 20;
    const [activeIndex,setIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex<0){
            newIndex = 0;
        }
        else if (newIndex>=2){
            newIndex = 1
        }
        setIndex(newIndex)
    }

    return (
        <>
        <div className="container-carousel">
            <div className="inner-carousel" style = {{transform : `translate(-${activeIndex*100}%)`}}>
            <TabInput/>
          <TableDetect />
            </div>

        <button onClick={()=> {updateIndex(activeIndex+1)}}>
            go left
        </button>

        <button onClick={()=> {updateIndex(activeIndex-1)}}>
            go right
        </button>
        
        </div>
       
       
       </>
    )
}