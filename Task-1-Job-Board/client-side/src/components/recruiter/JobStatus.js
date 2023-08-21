import React from 'react'
import { BsBag, BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import Applications from './Applications'

function JobStatus() {
    return (
        <div className='p-4 md:px-10 lg:px-24'>
            <h2 className='font-semibold text-xl py-4'>Job status</h2>
            <div className='bg-white p-2 rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                <div className='mb-2'>
                    <h2 className='text-lg font-semibold md:text-xl text-black'>Web Developer - FrontEnd</h2>
                    <p className='font-medium'>Microsoft</p>
                </div>
                <div className='flex max-[375px]:text-sm '>
                    <span className='flex items-center space-x-1 mr-2'><BsBag /><p>0-2 yrs | </p></span>
                    <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>0-3 LPA | </p></span>
                </div>
                <p className='flex items-center mb-2 space-x-1'><IoLocationOutline /><span>Jaipur, Rajasthan </span></p>
                <hr />
                <div className='flex justify-between items-center'>
                    <div className='md:flex font-medium md:space-x-2 py-4'>
                        <p className='text-sm'>Posted: 30 Days ago <span className='mx-2 hidden md:inline'>|</span></p>
                        <p className='text-sm'>Openings: 2<span className='mx-2 hidden md:inline'>|</span></p>
                        <p className='text-sm'>Applicants: 500</p>
                    </div>
                </div>

            </div>
            <h2 className='font-semibold text-lg my-4 mt-8'>Application Recieved</h2>
            <Applications/>
        </div>
    )
}

export default JobStatus
