import React, { useState } from 'react'
import { BsFilterLeft, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai';
function Filters() {

    const [show, setShow] = useState('hidden');
    const [work, setWork] = useState('');
    const [cate, setCate] = useState('');
    const [sal, setSal] = useState('');
    const [edu, setEdu] = useState('');

    const handleShow = (part) => {
        switch (part) {
            case 'slide':
                // code block
                if (show === '') {
                    setShow('hidden')
                }
                else {
                    setShow('');
                }
                break;
            case 'workmode':
                // code block
                if (work === '') {
                    setWork('hidden')
                }
                else {
                    setWork('');
                }
                break;
            case 'category':
                // code block
                if (cate === '') {
                    setCate('hidden')
                }
                else {
                    setCate('');
                }
                break;
            case 'salary':
                // code block
                if (sal === '') {
                    setSal('hidden')
                }
                else {
                    setSal('');
                }
                break;
            case 'education':
                // code block
                if (edu === '') {
                    setEdu('hidden')
                }
                else {
                    setEdu('');
                }
                break;
            default:
            // code block
        }


    }
    return (
        <div className='p-4'>
            <div className='flex justify-between md:hidden'>
                <div onClick={() => handleShow('slide')} className='text-3xl'>
                    <BsFilterLeft />
                </div>
                <div className='flex items-center  bg-green-600 rounded'>
                    <input className='p-1 border-2 border-green-500 rounded focus:border-green-600 focus:outline-none' type='search' placeholder='search jobs...' name='search' />
                    <p className='p-2 text-white '><AiOutlineSearch /></p>
                </div>
            </div>
            <div>
                <div className={`bg-green-600 w-4/6 md:w-full p-6 space-y-4 z-10 shadow-lg shadow-red-800/50 absolute md:static h-screen md:h-full overflow-auto rounded-md ${show} md:block`}>
                    <div className='md:flex justify-between'>
                        <h2 className='text-lg font-semibold'>All Filters</h2>
                        <p>Applied (1) </p>
                    </div>
                    <hr></hr>
                    <div>
                        <div onClick={() => handleShow('workmode')} className='flex cursor-pointer items-center justify-between text-xl font-medium mb-2'>
                            <h3 className=''>Work Mode</h3>
                            <p>{work === 'hidden' ? <BsArrowDownShort /> : <BsArrowUpShort />}</p>

                        </div>
                        <div className={`space-y-1 ${work}`}>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Work from office</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Remote</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Hybrid</label>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div onClick={() => handleShow('category')} className='flex cursor-pointer items-center justify-between text-xl font-medium mb-2'>
                            <h3 className=''>Categories</h3>
                            <p>{cate === 'hidden' ? <BsArrowDownShort /> : <BsArrowUpShort />}</p>

                        </div>
                        <div className={`space-y-1 ${cate}`}>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Software</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Sales and BDO</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Management</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Marketing</label>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div onClick={() => handleShow('salary')} className='flex cursor-pointer items-center justify-between text-xl font-medium mb-2'>
                            <h3 className=''>Salary</h3>
                            <p>{sal === 'hidden' ? <BsArrowDownShort /> : <BsArrowUpShort />}</p>

                        </div>
                        <div className={`space-y-1 ${sal}`}>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">0-3 Lakhs</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">3-6 Lakhs</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">6-10 Lakhs</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">above 10 Lakhs</label>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <div onClick={() => handleShow('education')} className='flex cursor-pointer items-center justify-between text-xl font-medium mb-2'>
                            <h3 className=''>Education</h3>
                            <p>{edu === 'hidden' ? <BsArrowDownShort /> : <BsArrowUpShort />}</p>

                        </div>
                        <div className={`space-y-1 ${edu}`}>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Post Graduate</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">Graduate</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                                <label for="checkbox" class="ml-2 block text-black font-medium">12th Pass</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
