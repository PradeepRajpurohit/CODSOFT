import React from 'react';
import { Link } from 'react-router-dom';
import { IoTimeOutline, IoLocationSharp } from 'react-icons/io5';
import { AiOutlineFileSearch } from 'react-icons/ai'
import { BsFileEarmarkCheckFill } from 'react-icons/bs'
import { SiPostman } from 'react-icons/si'
import Corousel from './Corousel';


function Home() {

  let Categories = ["Engineering", "Software", "HR", "Management", "BDO & Sales", "Marketing", "Reasearch", "Internship"];
  return (
    <>
      <main className='bg-[#f8e6e4]'>
        <section className='bg-[#990011] py-8'>
          <div className='text-white p-4 lg:m-20 md:m-8 sm:p-8'>
            <h1 className='font-semibold text-3xl sm:text-6xl mb-4'>Find Your Dream Job</h1>
            <p className='mb-12 sm:text-lg'>To Many Jobs are Listed for You to explore </p>
            <div className='space-x-4 font-semibold mb-12'>
              <Link to='/login' class="inline transition duration-500 ease-in-out items-center text-white bg-green-600 p-3 focus:outline-none hover:bg-[#990011] border-2 border-green-600 rounded text-base sm:text-lg">Upload Resume</Link>
              <Link to='/' class="inline items-center text-white transition duration-500 ease-in-out bg-green-600 p-3 focus:outline-none  rounded hover:bg-[#990011] border-green-600 border-2 text-base sm:text-lg">Post a Job</Link>
            </div>
            <div class="">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch ">
                <input
                  type="search"
                  class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] sm:p-4 text-base font-normal leading-[1.6] text-white sm:text-lg outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1" />
                <button
                  class="relative z-[2] flex items-center rounded-r bg-green-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>


          </div>

        </section>


        <section className='bg-[#f8e6e4] p-4 sm:px-20 sm:py-8'>

          {/* Categories */}

          <div className=''>
            <h1 className='font-semibold text-2xl sm:text-4xl mb-4 sm:mb-6 mt-2'>Popular Categories</h1>
            <div className='grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4'>
              {Categories.map((i, key) =>
                <Link key={key} className='bg-white hover:shadow-xl transition duration-500 ease-in-out rounded p-4'>
                  <h2 className='font-medium text-lg sm:text-xl'>{i}</h2>
                </Link>)}
            </div>
          </div>

          {/* Recente jobs */}

          <div className='mt-6 sm:mt-8'>
            <h1 className='font-semibold text-2xl sm:text-4xl mb-4 sm:mb-6 mt-2'>Recent Jobs</h1>
            <div className='grid gap-2 sm:gap-4 grid-cols-1'>
              {Categories.map((i, key) =>
                <div key={key} className='bg-white hover:shadow-xl transition duration-500 ease-in-out rounded p-4 sm:p-6'>
                  <div className='flex flex-col sm:flex-row sm:justify-between space-y-2 sm:items-center'>
                    <div className='flex flex-col min-[400px]:flex-row'>
                      <div className='w-20 p-2 border-2 mr-6'>
                        <img className='' src='https://logos-download.com/wp-content/uploads/2018/05/TATA_Football_Academy_de_Jamshedpur_logo_blue.png' alt='com' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-2xl sm:text-3xl mx-2'>Softwere Developer</h3>
                        <p className='flex items-center text-gray-700 font-medium'><span className='mx-2'><IoLocationSharp /></span>Mumbai,India</p>
                        <p className='flex items-center text-gray-700 font-medium'><span className='mx-2'><IoTimeOutline /></span>Full time</p>
                      </div>
                    </div>
                    <div className='my-4'>
                      <Link to='/' className="inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none  rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg">Apply Now</Link>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Top Companies */}

          <div className='mt-6 sm:mt-8'>
            <h1 className='font-semibold text-2xl sm:text-4xl mb-4 sm:mb-6 mt-2'>Top Companies</h1>
            <div className='grid gap-2 sm:gap-4 grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-4'>
              {Categories.map((i, key) =>
                <div key={key} className='bg-white hover:shadow-xl transition duration-500 ease-in-out rounded p-4 sm:p-6'>
                  <div className='flex flex-row space-y-2 items-center'>

                    <div className='w-14 p-2 border-2 mr-4'>
                      <img className='' src='https://logos-download.com/wp-content/uploads/2018/05/TATA_Football_Academy_de_Jamshedpur_logo_blue.png' alt='com' />
                    </div>
                    <div>
                      <h2 className='text-xl sm:text-2xl font-semibold'>TCS</h2>
                      <p className='text-gray-600 sm:text-xl font-medium'>50 Positions</p>
                    </div>



                  </div>
                </div>)}
            </div>
          </div>



        </section>

        {/* Process to Apply */}

        <section className='bg-[#990011] my-4 text-white text-center p-6 md:p-12 lg:px-20 px-10 space-y-4'>
          <h2 className='font-semibold text-2xl sm:4xl mb-8'>Process To Apply</h2>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-3'>
            <div className='bg-[#990011] opacity-100 shadow-2xl rounded border-0 p-8 lg:p-12 space-y-2'>

              <p className='inline-block text-6xl'><AiOutlineFileSearch /></p>
              <p className='font-medium text-xl sm:text-3xl'>Search Job</p>
              <p className='break-words'>Start by visiting the job board website and navigating to the search or browse section.
                Use keywords, location, job type, and other filters to narrow down your search and find relevant job listings.</p>
            </div>
            <div className=' opacity-100 z-10 shadow-2xl rounded border-0 p-8 lg:p-12 space-y-2'>
              <p className='inline-block text-6xl'><SiPostman /></p>
              <p className='font-medium text-xl sm:text-3xl'>Apply for Job</p>
              <p className='break-words'>On the job listing page, look for an "Apply Now" or similar button.
                Click on it to initiate the application process.</p>
            </div>
            <div className='bg-[#990011] opacity-100 shadow-2xl rounded border-0 p-8 lg:p-12 space-y-2'>
              <p className='inline-block text-6xl '><BsFileEarmarkCheckFill /></p>
              <p className='font-medium text-xl sm:text-3xl'>Get Your Job</p>
              <p className='break-words'>If the job board offers it, you might receive an email confirmation that your application was successfully submitted.
                Keep an eye on your email for any updates regarding your application status</p>
            </div>
          </div>
        </section>

        <Corousel />
      </main>
    </>
  )
}

export default Home
