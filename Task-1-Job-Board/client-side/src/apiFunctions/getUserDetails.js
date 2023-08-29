import * as Action from '../store/userSlice';


const UserDetail = () => async(dispatch)=> {
    const response = await fetch('http://localhost:5000/api/userauth/getuser', {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    dispatch(Action.setUserLoginState(json));
    
}
export {UserDetail};