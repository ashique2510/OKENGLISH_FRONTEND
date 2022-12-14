import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = "https://ruby-jolly-hippopotamus.cyclic.app"

const API_URL =`${host}/api/users/allusers`


export const getContact = createAsyncThunk('api/contactInfo',()=>{
    
const user= JSON.parse(localStorage.getItem('user'))
const accessToken = user.token

return axios.get(`${API_URL}/${user._id}`,{
    headers: {
        Authorization: 'Bearer ' + accessToken
    }})
.then((response)=>{
    return response.data
})

})


const contactInfoSlice = createSlice({
    name:'contact',
    initialState:{
        data: [],
        error:'',
        loading:false
    },

    extraReducers:{
        [getContact.fulfilled] : (state, action) => {

            state.loading = false
            state.contactData = action.payload
        },
        [getContact.pending] : (state, action) =>{
            state.loading = true
        },
        [getContact.rejected] : (state, action) =>{
            state.loading = false
            state.error = 'Some error occured'
        }
    }
})

export default contactInfoSlice.reducer