import { configureStore } from "@reduxjs/toolkit";
import  languageSlice  from "./reducer/languageSlice";


const store = configureStore({
    reducer:{
        language: languageSlice,
    }
})


export default store