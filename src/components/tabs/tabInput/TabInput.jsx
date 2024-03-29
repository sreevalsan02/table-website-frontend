import "./tabInput.css"
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {select} from "../../../features/imageSelected/imageSelectedSlice"
import {sendtabDetect} from "../../../features/tabDetect/tabDetectSlice"
import axios from "axios"


function TabInput() {
    const [currentFile,setFile] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(currentFile!= null){
            let image_file = URL.createObjectURL(currentFile)
            dispatch(select(image_file))
            const formData = new FormData();
            formData.append('the_file', currentFile);
            dispatch(sendtabDetect(formData))
           
        }
    },[currentFile])
    return (
        <>
            <div className="container-tabInput" >
                <div className="tabInput-left" style={{ backgroundImage: "url(/meshGrids/1.webp)" }}>
                    <h1>Insert Images <br />to extract <br /> tabular data</h1>
                </div>
                <div className="tabInput-right ">
                    <label htmlFor="file" className="shareOption btn-tabInput">
                        {/* <PermMedia htmlColor="tomato" className="shareIcon"/> */}
                        upload image

                        <input style={{ display: "none" }}
                            type="file" id="file" accept=".png,.jpeg,.jpg"
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    </label>

                </div>
{/* 
                {
                    currentFile &&(
                        <img src={URL.createObjectURL(currentFile)} alt = ""/>
                    )
                } */}

            </div>
        </>
    )
}
export default TabInput;