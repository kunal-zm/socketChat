import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface combineId{
    combineId?:string
}

const initialState:combineId={
    
}

export const combineIdSlice=createSlice({
    name:'combineId',
    initialState,
    reducers:{
        combinedIddata:(state,action)=>{
            console.log("i am from the combine id",action.payload)
            state.combineId=action.payload;
        }
    }
})

export const {combinedIddata}=combineIdSlice.actions;
export const combineIdselector=(state:RootState)=>state.combineIdReducer
export default combineIdSlice.reducer

