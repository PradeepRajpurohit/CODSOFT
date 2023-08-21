import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Signup from './components/Signup';
import JobDetails from './components/JobDetails';
import RecruiterSignup from './components/recruiter/RecruiterSignup';
import RecruiterLogin from './components/recruiter/RecruiterLogin';
import Company from './components/recruiter/Company';
import CreateJob from './components/recruiter/CreateJob';
import ApplyJob from './components/ApplyJob';
import JobStatus from './components/recruiter/JobStatus';
import ApplicantDetails from './components/recruiter/ApplicantDetails';
import User from './components/User';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/jobdetails' element={<JobDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/recruiter-login' element={<RecruiterLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/recruiter-signup' element={<RecruiterSignup />} />
          <Route path='/company-overview' element={<Company />} />
          <Route path='/post-new-job' element={<CreateJob />} />
          <Route path='/apply-for-job' element={<ApplyJob />} />
          <Route path='/application-recieved' element={<JobStatus />} />
          <Route path='/applicant-details' element={<ApplicantDetails />} />
          <Route path='/user' element={<User />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
