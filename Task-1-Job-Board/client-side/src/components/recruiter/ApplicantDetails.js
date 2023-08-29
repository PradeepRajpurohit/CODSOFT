import React from 'react'
import {Link} from 'react-router-dom'
import { UpdateApplication } from '../../apiFunctions/getApplication'
import { useSelector } from 'react-redux'

function ApplicantDetails() {

    const application = useSelector(state => state.application.applicationDetail)
    const handleSubmit = (status)=>{
        UpdateApplication(status,application._id)
    }

    return (
        <section className='bg-[#f8e6e4] p-4 md:px-10 lg:px-24'>
            <h2 className='font-semibold text-xl my-4'> Applicant Details</h2 >
            <div className='p-2 bg-white cursor-pointer rounded-md  shadow-lg shadow-red-800/50 text-gray-700'>
                <div className='mb-2 flex items-center space-x-2'>
                    <div className='relative h-24 w-24 rounded-full p-1 border-2 overflow-hidden'>
                        <img className='object-cover rounded-full inset-0 h-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold md:text-xl text-black'>{application.name}</h2>
                        <p className='font-medium'>Fresher</p>
                    </div>
                </div>
                <div className='mt-2'>
                    <h2 className='font-medium text-lg'>Brief Intro</h2>
                    <p>{application.intro}
                    </p>
                </div>
                <div className='mt-4 font-medium'>
                    <p>Experience: <span className='font-normal'>{application.experience} Yrs</span></p>
                    <p>Email: <span className='font-normal'>{application.email}</span></p>
                    <p>Contact: <span className='font-normal'>9001080307</span></p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-medium text-lg'>Skills</h3>
                    <p>{application.skills}</p>
                </div>
                <div className='flex mt-4 space-x-2'>
                <Link to='/application-recieved' onClick={()=>handleSubmit('rejectd')} className='inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg'>Reject</Link>
                <Link to='/application-recieved' onClick={()=>handleSubmit('selected')} className='inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg'>Select</Link>
                </div>
            </div >
        </section>
    )
}

export default ApplicantDetails
