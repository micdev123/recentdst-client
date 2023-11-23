import React from 'react'
import { urlFor } from '../../client'
import { Link } from 'react-router-dom'

const Slider = ({ currentProject }) => {
    
    return (
        <div className='flex flex-col items-center justify-center gap-[2rem] px-[1.5rem] pt-[2rem] rounded-md md:flex-row '>
            <div className="hero-text-content w-[100%] md:max-w-[48%]">
                <p className='text-[11px] font-medium'>
                    {currentProject ? currentProject?.services : null}
                </p>
                <div className="flex overflow-hidden">
                    <div className="transition-transform linear duration-500">
                        <h2 className='text-[1.3rem] mb-3 font-medium md:text-[1.8rem] md:leading-[2.5rem]'>
                            {currentProject ? currentProject?.name : null}
                        </h2>
                        <p className='text-[13.5px]'>
                            {currentProject ? currentProject?.tagline : null}
                        </p>
                    </div>
                </div>
                {/* Proof */}
                {/* <div className=""></div> */}
                <Link to={`/project/${currentProject && currentProject?._id}`} className='w-fit text-[11px] rounded-sm mt-[1rem] bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0'>
                    Read more
                </Link>
            </div>
            {/* Header Hero Image Container */}
            <div className="hero-image w-[100%]">
                <div className="md:w-[30rem] md:h-[20rem]">
                    <img src={currentProject && urlFor(currentProject?.coverImg)} alt="" className='w-[100%] h-[100%] object-cover rounded-md' />
                </div>
                
            </div>
        </div>
    )
}

export default Slider