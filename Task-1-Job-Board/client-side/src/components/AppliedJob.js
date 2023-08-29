import React, { useEffect } from 'react'
import { BsBag, BsFileEarmarkText,BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { AppliedApp } from '../apiFunctions/getApplication';

function AppliedJob() {

    const dispatch = useDispatch();
    const applied = useSelector(state => state.application.applied)

    useEffect(()=>{
        dispatch(AppliedApp())
    },[dispatch])

    return (
        <div className='space-y-2'>
            {applied.map((job) => {
                return <div className='bg-white p-2 cursor-pointer rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                    <div className='mb-2 flex items-center space-x-2'>
                        <div>
                            <h2 className='text-lg font-semibold md:text-xl text-black'>{job.jobDetail.title}</h2>
                            <p className='font-medium'>{job.jobDetail.companyName}</p>
                        </div>
                    </div>
                    <div className='flex max-[375px]:text-sm '>
                        <div className='flex max-[375px]:text-sm '>
                            <span className='flex items-center space-x-1 mr-2'><BsBag /><p>{job.jobDetail.experienceRequired} yrs | </p></span>
                            <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>{job.jobDetail.salary} LPA | </p></span>
                            <span className='flex items-center space-x-1'><IoLocationOutline /><p>{job.jobDetail.location} </p></span>
                        </div>
                    </div>
                    <span className='flex items-center  space-x-2'><BsFileEarmarkText /><p>{job.jobDetail.desc.length>50?job.jobDetail.desc.substring(0,50):job.jobDetail.desc}... </p></span>
                    <p className='text-sm'>{job.jobDetail.skills}</p>
                    <div className='flex items-center font-medium justify-between'>
                        <p className='text-sm'>Applied: {job.other.date}</p>
                        <p className='text-sm'>{job.other.status}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default AppliedJob
