import {combineReducers, configureStore} from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import companyReducer  from "./companySlice";
import jobReducer from "./jobSlice";
import applicationReducer  from "./applicationSlice";

const rootReducer = combineReducers({
    user: userReducer,
    company:companyReducer,
    job: jobReducer,
    application: applicationReducer
})

export default configureStore({reducer:rootReducer})