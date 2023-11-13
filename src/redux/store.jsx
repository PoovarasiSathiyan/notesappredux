import { configureStore } from "@reduxjs/toolkit";
import noteReducer from './noteSlics'

export default configureStore({
    reducer:{
        note:noteReducer
    }
})