const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user:null,
    token:null
}

let authSlicee = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginButtonClicked:(state,action)=>{
            state.user = action.payload,
            state.token = "abhishek"
        }
    }
})