import "./carousel.css"

import TabInput from "../tabs/tabInput/TabInput"
import TableDetect from "../tabs/tableDetect/TableDetect"
import UploadingFirst from "../tabs/uploadingFirst/UploadingFirst";
import { useEffect, useState } from "react";

import { UseSelector, useSelector } from "react-redux";

export default function Carousel() {

    const {selected,imageFile} = useSelector(state => state.imageSelected)
    const {is_tab_detected,cropped_image} = useSelector(state =>state.tabDetect)

    const [activeIndex,setIndex] = useState(0);


    useEffect(()=>{
        if(selected && is_tab_detected==false){
            console.log('reached carousel')
            setIndex(1)
        }
        
    },[selected])
    
    useEffect(()=>{
        if(is_tab_detected)
        {
            setIndex(2)
        }
    },[is_tab_detected])
    const updateIndex = (newIndex) => {
        if(newIndex<0){
            newIndex = 0;
        }
        else if (newIndex>=3){
            newIndex = 2
        }
        setIndex(newIndex)
    }

    return (
        <>
        <div className="container-carousel">
            <div className="inner-carousel" style = {{transform : `translate(-${activeIndex*100}%)`}}>
            <TabInput/>
            <UploadingFirst index={activeIndex}/>
            <TableDetect/>
            </div>

       
        
        </div>
       
        <button onClick={()=> {updateIndex(activeIndex+1)}} className="btn-carousel">
            go leftd
        </button>

        <button onClick={()=> {updateIndex(activeIndex-1)}}>
            go right
        </button>
       </>
    )
}