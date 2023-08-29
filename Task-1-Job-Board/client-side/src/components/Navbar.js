import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import {CgProfile,CgLogOut} from 'react-icons/cg';
import logo from '../assests/logo.png'
import * as Actionuser from '../store/userSlice'
import * as Actioncompany from '../store/companySlice'
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState('hidden');
    const [log,setLog] = useState('hidden');

    const user = useSelector(state => state.user.user)
    // const company = useSelector(state => state.company.company)

    const handleLogout = () =>{

        setLog('hidden')
        localStorage.removeItem('authToken');
        dispatch(Actionuser.setSignOutState())
    
        dispatch(Actioncompany.setCompanySignOutState())
        navigate('/')
    }
    
    const handleProfile = ()=>{
        if(!user.name){
            navigate('/company-overview')
        }
        else{
            navigate('/user')
        }
    }
    
    const handleuser = ()=>{
        if(log==='hidden'){
            setLog('')
        }
        else{
            setLog('hidden')
        }
    }
    
    const handleShow = () => {
        if (show === 'hidden') {
            setShow('');
        }
        else {
            setShow('hidden');
        }
    };
    return (
        <header class="text-white body-font shadow-black relative">
            <div class="bg-[#990011] mx-auto  flex md:px-10 p-5 flex-row items-center justify-between ">
                <div className='ml-3 w-60 h-10'>
                    <img className='object-cover w-full h-full' src={logo} alt='' />
                </div>
                <nav class="hidden md:ml-auto md:mr-auto sm:flex flex-wrap space-x-8 items-center text-base justify-center">
                    <Link to='/' class="hover:font-semibold">Home</Link>
                    <Link to='/jobs' class="hover:font-semibold">Jobs</Link>
                    <a href='#footer' class="hover:font-semibold">Contact</a>
                </nav>

                <div className= {`absolute z-20 shadow-lg shadow-green-800/50 space-y-4 bg-green-600 -bottom-28 rounded ${log} right-7 py-4 px-6`} >
                    <h3 onClick={handleProfile} className=' py-1 cursor-pointer flex items-center space-x-2 px-4 rounded hover:bg-green-500 transition duration-500 ease-in-out shadow-lg shadow-red-800/50'><span><CgProfile/></span><span>View Profile</span></h3>
                    <h3 onClick={handleLogout} className=' py-1 cursor-pointer flex space-x-2 items-center px-4 rounded hover:bg-green-500 transition duration-500 ease-in-out shadow-lg shadow-red-800/50'><span><CgLogOut/></span><span>Logout</span></h3>
                </div>

               {localStorage.getItem('authToken') ? <div onClick={handleuser} className='h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2'>
                    <img className='object-cover w-full h-full' src='https://freesvg.org/img/man-chris-kempson-01.png' alt='' />
                </div>:<div className=' sm:block space-x-4 font-semibold'>
                    <Link to='/login' class="inline-flex transition duration-500 ease-in-out items-center text-[#990011] bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-transparent hover:text-white rounded text-base">Login</Link>
                    <Link to='/recruiter-login' class="inline-flex transition duration-500 ease-in-out  items-center text-[#990011] bg-white border-2 py-1 px-3 focus:outline-none hover:bg-transparent hover:text-white rounded text-base">Post a Job</Link>
                </div>}
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
