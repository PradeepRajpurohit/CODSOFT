import * as Action from '../store/applicationSlice'

const CreateNewApplication = async (applicationDetail) => {
    const response = await fetch('http://localhost:5000/api/application/createapplication', {
        method: "POST",
        headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: applicationDetail.name, job: applicationDetail.job, email: applicationDetail.email, experience: applicationDetail.experience, intro: applicationDetail.intro, skills: applicationDetail.skills })
    });
    const json = await response.json();
    if (json.success) {
        console.log(json.success);
    }
    else {
        console.log(json.error)
    }
}

const AppliedApp = () => async(dispatch)=>{
    const response = await fetch('http://localhost:5000/api/application/getappliedjob', {
        method:'GET',
        headers:{
            "auth-token":localStorage.getItem('authToken'),
            "Content-Type":"application/json"
        }
    });
    const json = await response.json();
    dispatch(Action.getAppliedApplication(json))
}

const RecievedApp = (jobId) => async(dispatch)=>{
    const response = await fetch('http://localhost:5000/api/application/getapplication', {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ job:jobId })
    });
    const json = await response.json();
    dispatch(Action.getRecievedApplication(json))
}

const UpdateApplication = async(status,id) =>{
    const response = await fetch(`http://localhost:5000/api/application/updatestatus/${id}`, {
        method:'PUT',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({status:status})
    });
    const json = await response.json();
    console.log(json.success)
}

export {CreateNewApplication,AppliedApp,RecievedApp,UpdateApplication}