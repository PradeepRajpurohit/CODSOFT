import { createSlice } from "@reduxjs/toolkit";

export const applicationReducer = createSlice({
    name: 'application',
    initialState: {
        applied:[],
        recieved: [],
        applicationDetail: {}
    },
    reducers: {
        getAppliedApplication: (state, action) => {
            return {
                ...state,
                applied: action.payload
            }
        },

        getRecievedApplication: (state,action) => {
            return {
                ...state,
                recieved: action.payload
            }
        },
        setApplicationDetail:(state,action)=>{
            return{
                ...state,
                applicationDetail: action.payload
            }
        }
    }

})

export const { getRecievedApplication, setApplicationDetail, getAppliedApplication } = applicationReducer.actions;

export default applicationReducer.reducer;