import React, { useEffect } from 'react'
import { BsBag, BsFileEarmarkText } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { RecievedApp } from '../../apiFunctions/getApplication'
import { setApplicationDetail } from '../../store/applicationSlice'

function Applications() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const job = useSelector(state => state.job.job);

    useEffect(()=>{
        dispatch(RecievedApp(job._id));
    },[dispatch])

    const recieved = useSelector(state => state.application.recieved);
    // console.log(recieved)

    const detail = (application) => {
        dispatch(setApplicationDetail(application))
        navigate('/applicant-details')
    }

    return (
        <div className='space-y-2'>
            {recieved.map((application) => {
                return <div key={application._id} onClick={()=>{detail(application)}} className='bg-white p-2 cursor-pointer rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                    <div className='mb-2 flex items-center space-x-2'>
                        <div className='relative h-24 w-24 rounded-full p-1 border-2 overflow-hidden'>
                            <img className='object-cover rounded-full inset-0 h-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold md:text-xl text-black'>{
                            application.name}</h2>
                            <p className='font-medium'>Fresher</p>
                        </div>
                    </div>
                    <div className='flex max-[375px]:text-sm '>
                        <span className='flex items-center space-x-1 mr-2'><BsBag /><p>{application.experience} yrs | </p></span>
                        <span className='flex items-center space-x-1'><IoLocationOutline /><p>Jodhpur, rajasthan </p></span>
                    </div>
                    <span className='flex items-center  space-x-2'><BsFileEarmarkText /><p>{application.intro} </p></span>
                    <p className='text-sm'>{application.skills}</p>
                    <div className='flex items-center font-medium justify-between'>
                        <p className='text-sm'>Applied: {application.date}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Applications
