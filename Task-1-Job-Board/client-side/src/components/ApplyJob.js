import React, { useState } from 'react'
import { CreateNewApplication } from '../apiFunctions/getApplication';
import { useSelector } from 'react-redux';

function ApplyJob() {

    const job = useSelector(state => state.job.job)

    const [appDetail,setAppDetail] = useState({name:'',email:'', job:job._id, experience:'',intro:'', skills:''});

    const handleChange = (e)=>{
        setAppDetail({...appDetail,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        CreateNewApplication(appDetail);
    }
    return (
        <section className='p-4 md:px-24 lg:px-48 md:py-8'>
            <h3 className='font-semibold text-lg md:text-2xl mb-8'>Fill Your Details</h3>
            <form className='space-y-4'>
                <div>
                    <label for="name" class="block text-sm text-gray-800">Full Name</label>
                    <input type="text" placeholder='John smith' id='name' name='name' value={appDetail.name}
                    onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input type="email" placeholder='john@gmail.com' id='email' name='email' value={appDetail.email}
                    onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div>
                    <label for="experience" class="block text-sm text-gray-800">Experience</label>
                    <input type="number" id='experience' name='experience' value={appDetail.experience}
                    onChange={handleChange} placeholder='eg. 0-1'
                        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                
                <div>
                    <label for="intro" class="block text-sm text-gray-800">Introduction</label>
                    <textarea placeholder='Brief introduction about you' id='intro' name='intro' value={appDetail.intro}
                    onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <div>
                    <label for="skills" class="block text-sm text-gray-800">Your Skills</label>
                    <input type="text" placeholder='eg. Java, JavaScript, HTML' id='skills' name='skills' value={appDetail.skills}
                    onChange={handleChange}
                        class="block w-full px-4 py-2 mt-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
                <button type='submit' onClick={handleSubmit} className='inline-flex items-center text-[#990011] transition duration-500 ease-in-out bg-white p-3 px-6 focus:outline-none rounded-full hover:bg-[#990011] hover:text-white border-2 text-base sm:text-lg'>Submit</button>
            </form>
        </section>
    )
}

export default ApplyJob
