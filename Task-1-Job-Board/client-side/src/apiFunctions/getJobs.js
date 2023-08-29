import * as Action from '../store/jobSlice';


const JobListed = () => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/job/getjobs', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    dispatch(Action.getAllJobs(json));
    dispatch(Action.setNavigation('/jobdetails'))
}

const PostedJobs = () => async (dispatch) => {
    const response = await fetch('http://localhost:5000/api/job/postedjobs', {
        method: "GET",
        headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "application/json"
        }
    });
    const json = await response.json();
    dispatch(Action.getAllJobs(json));
    dispatch(Action.setNavigation('/application-recieved'))

}


const CreateNewJob = async (jobDetail) => {
    const response = await fetch('http://localhost:5000/api/job/createjob', {
        method: "POST",
        headers: {
            "auth-token": localStorage.getItem("authToken"),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: jobDetail.title, companyName: jobDetail.company, desc: jobDetail.desc, industry: jobDetail.industry, experienceRequired: jobDetail.experienceReq, salary: jobDetail.salary, location: jobDetail.location, opening: jobDetail.opening, jobType: jobDetail.jobType, roleCategory: jobDetail.roleCategory, skills: jobDetail.skills })
    });
    const json = await response.json();
    if (json.success) {
        console.log(json.success);
    }
    else {
        console.log(json.error)
    }
}

export { JobListed, CreateNewJob,PostedJobs };