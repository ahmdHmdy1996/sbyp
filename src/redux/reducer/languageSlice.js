import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name:"language",
    initialState:{
        lang: "en"
    },
    reducers:{
        changeToArabic: (state) => {
            state.lang = "ar"
        },
        changeToEnglish: (state) =>{
            state.lang = "en"
        }
    }
})

export const {changeToArabic,changeToEnglish } = languageSlice.actions


export default languageSlice.reducer