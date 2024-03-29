import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const sendtabDetect = createAsyncThunk('/sendtabDetect',
async(formData,thunkAPI) => {
    try{
        const response = await axios.post('https://valid-jaybird-lightly.ngrok-free.app/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            responseType : 'blob'
          });
        console.log('hey fulfilled')
       
        const val = URL.createObjectURL(response.data)
        return val
    }catch(error)
    {
        const message = (error.response && error.response.data
            &&error.response.data.message) || error.message
            ||error.toString()

            return thunkAPI.rejectWithValue(message)
    }
}
)

const tabDetectSlice = createSlice({
    name : 'tabDetect',
    initialState : {
        is_tab_detected : false,
        cropped_image : ""
    },
    reducers : {
        reset : state => {
            state.is_tab_detected = false
            state.cropped_image = ""
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(sendtabDetect.fulfilled ,(state,action)=>{
            state.cropped_image = action.payload
            state.is_tab_detected = true
        })
        .addCase(sendtabDetect.pending ,(state,action)=>{
            state.cropped_image  = ""
            state.is_tab_detected = false
        })
        .addCase(sendtabDetect.rejected ,(state,action)=>{
            state.cropped_image = ""
            state.is_tab_detected = false
        })
    }
})

export const {reset} = tabDetectSlice.actions
export default tabDetectSlice.reducer