import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = '/api/messages/getmsg'

export const getMessage = createAsyncThunk('api/getMessage',( Details ) => {

    const user= JSON.parse(localStorage.getItem('user'))
    const accessToken = user.token
    
    return axios.post(`${API_URL}/`, { Details } , {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }})
     .then((response) => {
        
        return response.data
       
     })
     
})


const getMessageSlice = createSlice({
    name:'messageSend',
    initialState:{
        data : [],
        error: '',
        loading: false
    },
    
    extraReducers:{
        [getMessage.fulfilled] : (state, action) => {

            state.loading = false
            state.getMsg = action.payload
            
        },
        [getMessage.pending] : (state, action) => {
            state.loading = true
        },
        [getMessage.rejected] : (state, action) => {
            state.loading = false
            state.error = 'Some error occured'
        }
    }
})


export default getMessageSlice.reducer