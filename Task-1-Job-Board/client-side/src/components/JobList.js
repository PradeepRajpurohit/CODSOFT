import React from 'react'
import { BsBag, BsFileEarmarkText, BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { FcLike } from 'react-icons/fc'

function JobList() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className='p-4 space-y-2'>
            {arr.map(() => {
                return <div className='bg-white p-2 cursor-pointer rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                    <div className='mb-2'>
                        <h2 className='text-lg font-semibold md:text-xl text-black'>Web Developer - FrontEnd</h2>
                        <p className='font-medium'>Microsoft</p>
                    </div>
                    <div className='flex max-[375px]:text-sm '>
                        <span className='flex items-center space-x-1 mr-2'><BsBag /><p>0-2 yrs | </p></span>
                        <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>0-3 LPA | </p></span>
                        <span className='flex items-center space-x-1'><IoLocationOutline /><p>Jaipur, Rajasthan </p></span>
                    </div>
                    <span className='flex items-center  space-x-2'><BsFileEarmarkText /><p>uhfwushfusfyw fg fuwc </p></span>
                    <p className='text-sm'>Hibernate, jQuery, Technical writing, JSP,</p>
                    <div className='flex items-center font-medium justify-between'>
                        <p className='text-sm'>30+ Days Ago</p>
                        <span className='flex items-center space-x-1'><FcLike /><p className=''>Save</p></span>
                    </div>
                </div>
            })}
        </div>
    )
}

export default JobList
