import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    planSummary : ''
}

export const planSlice = createSlice({
        name:'plans',
        initialState,

        reducers:{
             addPlans:(state, action) => {
                state.planSummary = action.payload
             }
        }
})

export const { addPlans } = planSlice.actions

export default planSlice.reducer