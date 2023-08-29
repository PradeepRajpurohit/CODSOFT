import React,{useEffect} from 'react';
import {BsDot} from 'react-icons/bs';

const Corousel = () => {

    const detail = [{name:'1',desc:'good',link:''},{name:'2',desc:'good',link:''},{name:'3',desc:'good',link:''}];

    let slideIndex = 1;

    useEffect(() => {
        showSlide(slideIndex);
    }, []);

    const showSlide = (n) => {

        

        const slides = document.getElementsByClassName('slide');
        const dots = document.getElementsByClassName('dot');

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
            dots[i].classList.remove('text-[#990011]')
        }

        slides[n - 1].classList.remove('hidden');
        dots[n-1].classList.add('text-[#990011]')
    }

        return (
            <section id='projects' className='p-5 md:px-20'>
                
                <div className="relative mx-auto py-10">
                    {detail.map((info) => {
                        return <div key={info.name} className="slide transition duration-500 ease-in-out relative rounded bg-white">
                            <div className='flex flex-col justify-start text-center items-center p-8'>
                                <div className='border-2 rounded-full'>
                                    <img className="h-20 rounded-full" src="https://pluspng.com/img-png/user-png-icon-young-user-icon-2400.png" alt='' />
                                </div>
                                <div className="p-2">
                                    <h1 className='text-xl font-bold'>{info.name}</h1>
                                    <h1 className='text-gray-600 font-medium mb-2'>developer</h1>
                                    <p className={`font-medium mb-4 `}>I can't believe how easy the job search has become after using this website. It's like a one-stop shop for all the opportunities out there. The filters and search options are a breeze to use, and the layout is so intuitive. I applied to a few positions within minutes. Fingers crossed for some positive responses soon! Kudos to the team behind this awesome platform.</p>
                                </div>
                            </div>
                        </div>
                    })}

                    <div className='font-bold text-6xl flex justify-center'>
                        <p onClick={()=> showSlide(1)} className='cursor-pointer dot'><BsDot/></p>
                        <p onClick={()=> showSlide(2)} className='cursor-pointer dot'><BsDot/></p>
                        <p onClick={()=> showSlide(3)} className='cursor-pointer dot'><BsDot/></p>
                    </div>

                </div>

            </section>

        )
    }

    export default Corousel

