import "./tabInput.css"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { select } from "../../../features/imageSelected/imageSelectedSlice"
import { sendtabDetect } from "../../../features/tabDetect/tabDetectSlice"

function TabInput() {
    const [currentFile, setFile] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentFile != null) {
            let image_file = URL.createObjectURL(currentFile)
            dispatch(select(image_file))
            const formData = new FormData();
            formData.append('the_file', currentFile);
            dispatch(sendtabDetect(formData))

            console.log('enterd use effect')
        }
    }, [currentFile,dispatch])
    return (
        <>

            {/* <Reveal> */}
                <div className="container-tabInput" >
                    <div className="tabInput-left" >
                        <h1>Insert Images </h1> <h1>to extract</h1> <h1>tabular data</h1>
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

                </div>

            {/* </Reveal> */}

        </>
    )
}
export default TabInput;