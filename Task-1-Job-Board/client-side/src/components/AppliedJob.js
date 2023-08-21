import React from 'react'
import { BsBag, BsFileEarmarkText,BsCurrencyRupee } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'

function AppliedJob() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    return (
        <div className='space-y-2'>
            {arr.map(() => {
                return <div className='bg-white p-2 cursor-pointer rounded-md space-y-1 shadow-lg shadow-red-800/50 text-gray-700'>
                    <div className='mb-2 flex items-center space-x-2'>
                        <div className='relative h-24 w-24 rounded-md p-1 border-2 overflow-hidden'>
                            <img className='object-cover rounded-md inset-0 h-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold md:text-xl text-black'>TCS</h2>
                            <p className='font-medium'>Fresher</p>
                        </div>
                    </div>
                    <div className='flex max-[375px]:text-sm '>
                        <div className='flex max-[375px]:text-sm '>
                            <span className='flex items-center space-x-1 mr-2'><BsBag /><p>0-2 yrs | </p></span>
                            <span className='flex items-center space-x-1 mr-2'><BsCurrencyRupee /><p>0-3 LPA | </p></span>
                            <span className='flex items-center space-x-1'><IoLocationOutline /><p>Jaipur, Rajasthan </p></span>
                        </div>
                    </div>
                    <span className='flex items-center  space-x-2'><BsFileEarmarkText /><p>uhfwushfusfyw fg fuwc </p></span>
                    <p className='text-sm'>Hibernate, jQuery, Technical writing, JSP,</p>
                    <div className='flex items-center font-medium justify-between'>
                        <p className='text-sm'>Applied: 10 Days Ago</p>
                        <p className='text-sm'>Status: Pending</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default AppliedJob
