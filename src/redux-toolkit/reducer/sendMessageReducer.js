import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "https://ruby-jolly-hippopotamus.cyclic.app"

const API_URL = `${host}/api/messages/addmsg`

export const sendMessage = createAsyncThunk('api/sendMessage',( Details ) => {

    const user= JSON.parse(localStorage.getItem('user'))
    const accessToken = user.token

    return axios.post(`${API_URL}/`, { Details } , {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }}
         )
     .then((response) => {
        return response.data
     })
})


const sendMessageSlice = createSlice({
    name:'messageSend',
    initialState:{
        data : [],
        error: '',
        loading: false
    },

    extraReducers:{
        [sendMessage.fulfilled] : (state, action) => {

            state.loading = false
            state.sendMsg = action.payload
            
        },
        [sendMessage.pending] : (state, action) => {
            state.loading = true
        },
        [sendMessage.rejected] : (state, action) => {
            state.loading = false
            state.error = 'Some error occured'
        }
    }
})


export default sendMessageSlice.reducer