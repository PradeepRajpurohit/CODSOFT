import React, { useEffect, useState } from 'react'
import AboutCompany from './AboutCompany'
import JobList from '../JobList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { CompanyDetail } from '../../apiFunctions/getCompanyDetail'
import { PostedJobs } from '../../apiFunctions/getJobs'
import { setJobSearch } from '../../store/jobSlice'

function Company() {

  const dispatch = useDispatch()

  useEffect(()=>{
    // eslint-disable-next-line
    {localStorage.getItem("authToken") && dispatch(CompanyDetail())}
    dispatch(setJobSearch(''))
  },[dispatch])

  const company = useSelector(state => state.company.company);

  const [over, setOver] = useState('font-bold');
  const [job, setJob] = useState();

  useEffect(()=>{
    dispatch(PostedJobs())
  },[dispatch])

  const handleShow = (box) => {
    if (box === 'overview') {
      setJob('font-normal')
      setOver('font-bold')
    }
    if (box === 'jobs') {
      setOver('font-normal')
      setJob('font-bold')
    }
  }
  return (
    <section className='bg-[#f8e6e4]'>

      <div className='relative h-36 lg:h-48 overflow-hidden'>
        <img className='object-cover  inset-0 h-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
      </div>

      <div className='lg:px-24 md:px-10 -top-4 relative rounded-t-2xl  bg-[#f8e6e4]'>
        <div className='w-full block p-4 relative'>

          <div className='absolute h-24 w-24 -top-6 left-6 rounded-md overflow-hidden'>
            <img className='object-cover z-10 inset-0 h-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
          </div>
          <div className='pl-36 pr-4'>
            <h2 className='font-semibold text-lg md:text-2xl'>{company.name}</h2>
            <p className='text-sm'>We collectively can create a healthier world</p>
          </div>
          <div className='flex space-x-8 text-xl mb-2 mt-4'>
            <h3 onClick={() => handleShow('overview')} className={`${over} cursor-pointer`}>Overview</h3>
            <h3 onClick={() => handleShow('jobs')} className={`${job} cursor-pointer`}>Jobs</h3>
          </div>
          <hr className='border-[1px] border-black'></hr>
        </div>
        <div>
          {over === 'font-bold' ? <AboutCompany /> : <div><div className='flex justify-between items-center px-4'>
            <h3 className='font-medium text-xl'>Job listed</h3>
            <div className=''>
              <Link to='/post-new-job' className="inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none  rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg">Post a new Job</Link>
            </div>
          </div>
          <div>
            <JobList />
            </div>
          </div>}
        </div>
      </div>





    </section>
  )
}

export default Company
