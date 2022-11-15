import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profilePicture : '',
}

export const globalSlice = createSlice({
        name:'globalData',
        initialState,

        reducers:{
             addProfilePicture:(state, action) => {
                state.profilePicture = action.payload
             }
        }
})

export const { addProfilePicture } = globalSlice.actions

export default globalSlice.reducer