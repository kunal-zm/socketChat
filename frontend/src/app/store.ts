import { configureStore } from "@reduxjs/toolkit";
import selectedReducer from '../features/selectedSlice' //.js doesn't come in the end
import combineIdReducer from '../features/combineIdSlice'
export const store=configureStore({
    reducer:{
        selectedReducer,
        combineIdReducer
    }
})

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>