import { configureStore } from "@reduxjs/toolkit";
import  languageSlice  from "./reducer/languageSlice";
import authReducer from './reducer/authSlice';

const store = configureStore({
    reducer:{
        language: languageSlice,
        auth:authReducer
    }
})


export default store