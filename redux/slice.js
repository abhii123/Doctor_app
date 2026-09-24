import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    user:null,
    error:null,
    token:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
         state.user = action.payload,
         state.loading = true,
         state.error = null,
         state.token = "delhi"
        }
    }
})

export const {login} = authSlice.actions;
export default  authSlice.reducer;