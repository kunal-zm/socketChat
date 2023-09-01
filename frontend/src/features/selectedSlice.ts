import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface selectedInterface{
    _id?:string;
    username?:string
}

const initialState:selectedInterface={

}

export const selectedSlice=createSlice({
    name:'selected',
    initialState,
    reducers:{
        SelectedOne:(state,action)=>{
            const {_id,username} = action.payload
            state._id = _id;
            state.username = username
        }
    }
})

export const {SelectedOne}=selectedSlice.actions;
export const selectedSelector=(state:RootState)=>state.selectedReducer
export default selectedSlice.reducer;