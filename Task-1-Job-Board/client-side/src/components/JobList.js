import React from 'react'
import {setJob} from '../store/jobSlice'
import { BsBag, BsFileEarmarkText, BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { FcLike } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function JobList({search}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {jobs,navigation} = useSelector(state => state.job);

    const handleDetails = (job) => {
        dispatch(setJob(job))
        navigate(navigation)
      }
    
    return (
        <div className='p-4 space-y-2'>
            {jobs.filter((job) => {return search.toLowerCase() ==='' ? job : job.title.toLowerCase().includes(search)}).map((job) => {
                return <div  onClick={()=>{handleDetails(job)}} className='bg-white p-2 cursor-pointer rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                    <div className='mb-2'>
                        <h2 className='text-lg font-semibold md:text-xl text-black'>{job.title}</h2>
                        <p className='font-medium'>{job.companyName}</p>
                    </div>
                    <div className='flex max-[375px]:text-sm '>
                        <span className='flex items-center space-x-1 mr-2'><BsBag /><p>{job.experienceRequired} yrs | </p></span>
                        <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>{job.salary} LPA | </p></span>
                        <span className='flex items-center space-x-1'><IoLocationOutline /><p>{job.location} </p></span>
                    </div>
                    <span className='flex items-center  space-x-2'><BsFileEarmarkText /><p>{job.desc.length>50?job.desc.substring(0, 50):job.desc}... </p></span>
                    <p className='text-sm'>{job.skills}</p>
                    <div className='flex items-center font-medium justify-between'>
                        <p className='text-sm'>{job.date} Days Ago</p>
                        <span className='flex items-center space-x-1'><FcLike /><p className=''>Save</p></span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default JobList
