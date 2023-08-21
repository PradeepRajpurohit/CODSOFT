import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../assests/logo.png'

function Navbar() {

    const [show, setShow] = useState('hidden');
    const handleShow = () => {
        if (show === 'hidden') {
            setShow('');
        }
        else {
            setShow('hidden');
        }
    };
    return (
        <header class="text-white body-font shadow-black">
            <div class="bg-[#990011] mx-auto flex md:px-10 p-5 flex-row items-center justify-between ">
                <div className='ml-3 w-60 h-10'>
                    <img className='object-cover w-full h-full' src={logo} alt='' />
                </div>
                <nav class="hidden md:ml-auto md:mr-auto sm:flex flex-wrap space-x-8 items-center text-base justify-center">
                    <Link to='/' class="hover:font-semibold">Home</Link>
                    <Link to='/jobs' class="hover:font-semibold">Jobs</Link>
                    <Link to='/jobs' class="hover:font-semibold">Contact</Link>
                </nav>

                <div className='h-10 w-10 hidden rounded-full border-2'>
                    <img className='object-cover w-full h-full' src={logo} alt='' />
                </div>

                <div className='hidden sm:block space-x-4 font-semibold'>
                    <Link to='/login' class="inline-flex transition duration-500 ease-in-out items-center text-[#990011] bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-transparent hover:text-white rounded text-base">Login</Link>
                    <Link to='/recruiter-login' class="inline-flex transition duration-500 ease-in-out  items-center text-[#990011] bg-white border-2 py-1 px-3 focus:outline-none hover:bg-transparent hover:text-white rounded text-base">Post a Job</Link>
                </div>
                <div onClick={handleShow} className='sm:hidden text-2xl'>
                    <GiHamburgerMenu />
                </div>
            </div>
            <div className={`bg-[#990011] ${show} sm:hidden absolute w-full opacity-90 flex flex-col px-5 p-4 space-y-2`}>
                <Link to='/' class="hover:font-semibold">Home</Link>
                <Link to='/jobs' class="hover:font-semibold">Jobs</Link>
                <Link to='/jobs' class="hover:font-semibold">Blogs</Link>
                <Link to='/jobs' class="hover:font-semibold">Contact</Link>
            </div>
        </header>
    )
}

export default Navbar
