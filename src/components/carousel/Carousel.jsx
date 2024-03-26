import "./carousel.css"

import TabInput from "../tabs/tabInput/TabInput"
import TableDetect from "../tabs/tableDetect/TableDetect"
import UploadingFirst from "../tabs/uploadingFirst/UploadingFirst";
import { useEffect, useState } from "react";

import { UseSelector, useSelector } from "react-redux";

export default function Carousel() {

    const {selected,imageFile} = useSelector(state => state.imageSelected)
    const [activeIndex,setIndex] = useState(0);


    useEffect(()=>{
        if(selected){
            console.log('reached carousel')
            setIndex(1)
        }
    },[selected])
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
            <UploadingFirst index={activeIndex}/>
         
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