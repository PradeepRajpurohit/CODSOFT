import * as Action from '../store/companySlice';


const CompanyDetail = () => async(dispatch)=> {
    const response = await fetch('http://localhost:5000/api/companyauth/getcompany', {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    dispatch(Action.setCompanyLoginState(json));
    
}
export {CompanyDetail};