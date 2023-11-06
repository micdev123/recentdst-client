import { useEffect, useRef, useState } from 'react'
import { TbStarsFilled } from "react-icons/tb"
import { PiCompassToolBold } from "react-icons/pi"
import { BsDot } from 'react-icons/bs'
import { BiShapeCircle } from "react-icons/bi"
import { MdShapeLine } from "react-icons/md"
import { projects } from '../../data'
import { Link } from 'react-router-dom'

const Header = () => {
    const slideRef = useRef(null); // Header Slider Ref
    const autoSlide = true;
    const autoSlideInterval = 3000;
    const [current, setCurrent] = useState(0);
    const [featuredProjects, setFeaturedProjects] = useState([]);

    const selectRandomProjects = () => {
        const shuffledProjects = projects.sort(() => 0.5 - Math.random());
        const selectedProjects = shuffledProjects.slice(0, 3);
        setFeaturedProjects(selectedProjects);
    };

    useEffect(() => {
        const next = () => setCurrent((curr) => (curr + 1) % (featuredProjects.length || 1));

        const intervalId = setInterval(next, autoSlideInterval);

        return () => {
        clearInterval(intervalId);
        };
    }, [autoSlide, featuredProjects]);

    useEffect(() => {
        selectRandomProjects(); // Initial selection of random projects

        const hourInterval = setInterval(selectRandomProjects, 3600000);

        return () => {
        clearInterval(hourInterval);
        };
    }, []);

    
    // console.log(featuredProjects);
    return (
        <div className='header max-w-[90%] mx-auto sm:max-w-[90%] xl:max-w-[80%]'>
            {/* Header Container */}
            <section className="header-container flex flex-col items-center justify-center gap-[2rem] px-[1.5rem] pt-[2rem] rounded-md relative md:flex-row md:py-[3rem] md:pr-[3rem]">
                {/* Header Hero Text Content */}
                <div className="hero-text-content w-[100%] md:max-w-[48%]">
                    <p className='text-[11px] font-medium'>
                        {featuredProjects && featuredProjects[current]?.service}
                    </p>
                    <div className="flex overflow-hidden">
                        <div className="transition-transform linear duration-500" ref={slideRef}>
                            <h2 className='text-[1.3rem] mb-3 font-medium md:text-[1.8rem] md:leading-[2.5rem]'>
                                {featuredProjects && featuredProjects[current]?.name}
                            </h2>
                            <p className='text-[13.5px]'>
                                {featuredProjects && featuredProjects[current]?.tagline}
                            </p>
                        </div>
                    </div>
                    {/* Proof */}
                    {/* <div className=""></div> */}
                    <Link to={`/project/${featuredProjects && featuredProjects[current]?.id}`} className='w-fit text-[11px] rounded-sm mt-[1rem] bg-zinc-700 text-white py-[5px] px-[15px] flex items-center gap-x-2 border-0'>
                        Read more
                    </Link>
                </div>
                {/* Header Hero Image Container */}
                <div className="hero-image w-[100%]">
                    <div className="md:w-[30rem] md:h-[20rem]">
                        <img src={featuredProjects && featuredProjects[current]?.cover_img} alt="" className='w-[100%] h-[100%] object-cover rounded-md' />
                    </div>
                    <div className="flex items-center justify-center mt-[1rem]">
                        {featuredProjects && featuredProjects.map((_, index) => (
                            <BsDot
                                onClick={() => setCurrent(index)}
                                className={`text-[1.3rem] cursor-pointer ${current === index ? 'text-amber-600' : 'text-lightBlack dark:text-gray-400'}`}
                                key={index}
                            />
                        ))}
                    </div>
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