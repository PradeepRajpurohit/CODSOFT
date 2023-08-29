import { createSlice } from "@reduxjs/toolkit";

export const companyReducer = createSlice({
    name: 'company',
    initialState: {
        company: {}
    },
    reducers: {
        setCompanyLoginState: (state, action) => {
            return {
                company: action.payload
            }
        },

        setCompanySignOutState: (state) => {
            return {
                company:{}
            }
        }
    }

})

export const { setCompanyLoginState, setCompanySignOutState } = companyReducer.actions;

export default companyReducer.reducer;