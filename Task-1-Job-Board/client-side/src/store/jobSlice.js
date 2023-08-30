import { createSlice } from "@reduxjs/toolkit";

export const jobReducer = createSlice({
    name: 'job',
    initialState: {
        search: '',
        jobs: [],
        navigation: '',
        job: {}
    },
    reducers: {
        getAllJobs: (state, action) => {
            return {
                jobs: action.payload
            }
        },

        getPostedJobs: (state,action) => {
            return {
                posted: action.payload
            }
        },

        setNavigation:(state,action)=>{
            return{
                ...state,
                navigation: action.payload
            }
        }, setJob:(state,action)=>{
            return{
                ...state,
                job: action.payload
            }
        },
        setJobSearch:(state,action)=>{
            return{
                ...state,
                search: action.payload
            }
        }
    }

})

export const { getAllJobs, getPostedJobs,setNavigation,setJob,setJobSearch } = jobReducer.actions;

export default jobReducer.reducer;