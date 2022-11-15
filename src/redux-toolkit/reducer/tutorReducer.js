import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = '/api/tutor/getAllTutors'


export const getTutorInfo = createAsyncThunk('api/tutorInfo',() => {
    
    // const user = JSON.parse(localStorage.getItem('user'))
    // const accessToken = user.token
    return axios.get(API_URL)


     .then((response) => {
        return response.data
     })

})




const tutorInfoSlice = createSlice({
    name:'tutor',
    initialState:{
        data : [],
        error: '',
        loading: false
    },

    extraReducers:{
        [getTutorInfo.fulfilled] : (state, action) => {

            state.loading = false
            state.tutorData = action.payload
            
        },
        [getTutorInfo.pending] : (state, action) => {
            state.loading = true
        },
        [getTutorInfo.rejected] : (state, action) => {
            state.loading = false
            state.error = 'Some error occured'
        }
    }
})


export default tutorInfoSlice.reducer