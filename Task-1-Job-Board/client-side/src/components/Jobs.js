import React from 'react'
import JobList from './JobList'
import Filters from './Filters'
import { useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

function Jobs() {

  const navigate = useNavigate();

  const handleDetails = () => {
    navigate('/jobdetails')
  }

  return (
    <section className='bg-[#f8e6e4]'>
      <div className='md:grid gap-2  grid-cols-10 lg:px-20'>
        <div className=' col-span-4'>
          <Filters />
        </div>
        <div className='col-span-6'>
          <div className='m-4 mb-0 flex max-md:hidden items-center justify-between'>
            <p className='text-gray-700 font-semibold'>2000 available</p>
            <div className='flex items-center  bg-green-600 rounded'>
              <input className='p-1 border-2 border-green-500 rounded focus:border-green-600 focus:outline-none' type='search' placeholder='search jobs...' name='search' />
              <p className='p-2 text-white '><AiOutlineSearch /></p>
            </div>
          </div>
          <div onClick={handleDetails}>
            <JobList />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Jobs
