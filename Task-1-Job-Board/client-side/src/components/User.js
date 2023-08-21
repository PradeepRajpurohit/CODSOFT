import React,{useState} from 'react'
import AboutUser from './AboutUser';
import AppliedJob from './AppliedJob';

function User() {

    
  const [over, setOver] = useState('font-bold');
  const [job, setJob] = useState();

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

                    <div className='absolute h-24 w-24 -top-6 left-6 rounded-full border-2 overflow-hidden'>
                        <img className='object-cover z-10 inset-0 h-full rounded-full w-full top-0 block' src='https://cdn.wallpapersafari.com/83/54/b9KGv4.jpg' alt='bg' />
                    </div>
                    <div className='pl-36 pr-4'>
                        <h2 className='font-semibold text-lg md:text-2xl'>Pradeep Singh Rajpurohit</h2>
                        <p className='text-sm'>We collectively can create a healthier world</p>
                    </div>
                    <div className='flex space-x-8 text-xl mb-2 mt-4'>
                        <h3 onClick={() => handleShow('overview')} className={`${over} cursor-pointer`}>Overview</h3>
                        <h3 onClick={() => handleShow('jobs')} className={`${job} cursor-pointer`}>Applied Jobs</h3>
                    </div>
                    <hr className='border-[1px] border-black'></hr>
                </div>
                <div>
                    {over === 'font-bold' ?
                     <AboutUser /> 
                    : <div className='p-4'>
                        <AppliedJob />
                    </div>}
                </div>
            </div>





        </section>
    )
}

export default User
