import { useEffect, useRef, useState } from 'react'
import { TbStarsFilled } from "react-icons/tb"
import { PiCompassToolBold } from "react-icons/pi"
import { RiSendPlaneFill } from 'react-icons/ri'
import { BiShapeCircle } from "react-icons/bi"
import { MdShapeLine } from "react-icons/md"
import { sliderContent } from '../../data'
import TopNav from '../TopNav'

const Header = () => {
    const slideRef = useRef(null); // Header Slider Ref
    const autoSlide = true;
    const autoSlideInterval = 3000;
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(curr => (curr + 1) % sliderContent?.length);
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval) // When carousal unmount
    }, [autoSlide])
    return (
        <div>
            {/* Header Container */}
            <section className="header-container  flex flex-col items-center justify-center gap-[2rem] p-[1.5rem] rounded-md relative md:h-[80vh] md:flex-row md:p-[3rem]">
                {/* Header Hero Text Content */}
                <div className="hero-text-content w-[100%] md:max-w-[48%]">
                    <p className='text-[11px] font-medium'>
                        Innovate. Ignite. Invest.
                    </p>
                    <div className="flex overflow-hidden">
                        <div className="transition-transform linear duration-500" ref={slideRef}>
                            <h2 className='text-[1.3rem] mb-3 font-medium md:text-[1.8rem] md:leading-[2.5rem]'>
                                {sliderContent[current].name}
                            </h2>
                            <p className='text-[13.5px]'>
                                {sliderContent[current].info}
                            </p>
                        </div>
                    </div>
                    {/* Proof */}
                    {/* <div className=""></div> */}
                    <button className='text-[11px] rounded-sm mt-[1rem] bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0'>
                        Read more
                    </button>
                </div>
                {/* Header Hero Image Container */}
                <div className="hero-image w-[100%] md:w-[30rem]">
                    <img src="/assets/hero-1.jpg" alt="" className='w-[100%] h-[100%] object-cover rounded-md' />
                </div>
                
                <div className="shapes_container">
                    <BiShapeCircle className='absolute top-0 right-0 text-[1.5rem] text-zinc-300 font-light md:top-[2rem] md:right-[3rem]' />
                    <MdShapeLine className='absolute bottom-[-1rem] left-0 text-[1.2rem] text-green-200 font-light' />
                    <TbStarsFilled className='hidden absolute text-[1.2rem] text-zinc-300 font-light md:block md:top-[20%] md:left-[30%]' />
                    <PiCompassToolBold className='absolute top-[10%] left-[-2%] text-[1rem] text-zinc-300' />
                </div>
                
            </section>
        </div>
    )
}

export default Header