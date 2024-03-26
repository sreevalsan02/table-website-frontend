import { createSlice } from "@reduxjs/toolkit";


const imageSelectedSlice = createSlice({
    name : 'imageSelected',
    initialState :{
        selected : false,
        image : null
    },
    reducers : {
        select : (state,action) => {
            state.selected = true
            state.image = action.payload
        },
        reset : (state) => {
            state.selected = false
            state.image = null
        }
    }
})

export const {select,reset} = imageSelectedSlice.actions

export default imageSelectedSlice.reducer