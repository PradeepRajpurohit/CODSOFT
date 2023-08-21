import React from 'react'

function AboutUser() {
    return (
        <div className='px-4 pb-4'>
            <div className='bg-white p-2 rounded-md space-y-1 mt-2 shadow-lg shadow-red-800/50 text-gray-700'>
                <h3 className='font-medium text-lg'>Brief Intro</h3>
                <p>Professional Automotives Pvt. Ltd is a leading logistics company specializing in providing efficient and comprehensive transportation and supply chain solutions to businesses in the automotive industry. With a strong focus on reliability, professionalism, and customer satisfaction, we are committed to ensuring seamless logistics operations and driving the success of our clients.Services:Automotive LogisticsWarehousing and DistributionSupply Chain ManagementTechnology and Innovation : We leverage advanced technology and embrace innovation to deliver superior logistics services. Our state-of-the-art tracking systems provide real-time visibility, enabling you to monitor your shipments at every stage of the journey. We also employ data analytics and automation tools to optimize routing, enhance operational efficiency, and provide actionable insights for informed decision-making</p>

            </div>
            <div className='bg-white p-2 rounded-md space-y-1 mt-4 shadow-lg shadow-red-800/50 text-gray-700'>
                <h3 className='font-medium text-lg'> Highest Education</h3>
                <div className='font-medium space-y-1'>
                    <p>Gradute</p>
                    <p>Government Egineering college,Ajmer</p>
                    <p>Degree:<span className='font-normal'> B.Tech</span></p>
                    <p>Spacialization:<span className='font-normal'> Computer Science</span></p>
                    <p>CGPA / Percentage:<span className='font-normal'> 8.40</span></p>
                </div>
            </div>
            <div className='bg-white p-2 rounded-md space-y-1 mt-4 shadow-lg shadow-red-800/50 text-gray-700'>
                <h3 className='font-medium text-lg'>Other Info</h3>
                <div className='font-medium grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <p>Profession: <span className='font-normal'>Fresher</span></p>
                    <p>Experience: <span className='font-normal'>0-1 yrs</span></p>
                    <p>Email: <span className='font-normal'>pradeepraa@gamil.com</span></p>
                    <p>Mobile No: <span className='font-normal'>9001080308</span></p>
                </div>
                <p className='font-medium'>Address: <span className=''>Professional Automotives Pvt. Ltd. Near UDB Orchid Building, Main Ajmer Road, Village Narasingpura, Post Mahapura, Jaipur, Rajasthan(302026)</span></p>
            </div>
        </div>
    )
}

export default AboutUser
