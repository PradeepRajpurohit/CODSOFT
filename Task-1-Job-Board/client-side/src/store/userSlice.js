import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUserLoginState: (state, action) => {
            return {
                user: action.payload
            }
        },

        setSignOutState: (state) => {
            return {
                user:{}
            }
        }
    }

})

export const { setUserLoginState, setSignOutState } = userReducer.actions;

export default userReducer.reducer;